export const MYSHELL_BUILD = {
  command: "cat file.txt | sort",
  source: "https://github.com/Yosf96633/myshell",
  stages: [
    {
      title: "Parse the command",
      summary: "Turn text into two commands and one pipeline.",
      input: "cat file.txt | sort",
      output: '[ ["cat", "file.txt"], ["sort"] ]',
      explanation:
        "The parser separates the unquoted pipe operator from command arguments. That distinction matters: a pipe inside quotes belongs to an argument, rather than starting another process. Parsing completes before execution begins.",
      decision:
        "Keep syntax handling separate from execution so malformed input can be rejected before any child processes start.",
      code: 'parse_pipeline(line)\n  → command(argv: ["cat", "file.txt"])\n  → command(argv: ["sort"])',
    },
    {
      title: "Create the connection",
      summary: "Give the producer and consumer a shared byte stream.",
      input: "Two commands that need to exchange data",
      output: "One pipe: a read end and a write end",
      explanation:
        "A pipe provides two file descriptors. The first command will write into it; the second will read from it. This connects the programs without an intermediate file.",
      decision:
        "Start every pipeline stage before waiting. Waiting for the producer first can deadlock when the pipe fills and no consumer is running.",
      code: "read_end, write_end = pipe()\n// Start both stages before waiting for either.",
    },
    {
      title: "Start and wire the processes",
      summary: "Connect cat’s output to sort’s input.",
      input: "Command arguments + pipe descriptors",
      output: "Two child processes connected through stdin/stdout",
      explanation:
        "Each external command runs in its own child process. The cat child duplicates the pipe’s write end onto standard output; the sort child duplicates its read end onto standard input. Each child then closes the original pipe descriptors it no longer needs.",
      decision:
        "File descriptor ownership is part of correctness. A leftover write end can keep sort waiting for end-of-file even after cat has finished.",
      code: "cat child:\n  dup2(write_end, STDOUT_FILENO)\n  close(original pipe descriptors)\n\nsort child:\n  dup2(read_end, STDIN_FILENO)\n  close(original pipe descriptors)",
    },
    {
      title: "Hand over the terminal",
      summary: "Treat the foreground pipeline as a single job.",
      input: "Two children launched from an interactive shell",
      output: "A shared process group owning the foreground terminal",
      explanation:
        "The children belong to a shared process group. For an interactive foreground job, terminal ownership moves to that group. Terminal-generated signals such as Ctrl+C then reach the foreground job while the shell remains available to manage it.",
      decision:
        "Manage a pipeline as one job so foreground control and signals apply to all of its stages together.",
      code: "assign children to pipeline process group\ntcsetpgrp(terminal, pipeline_group)\n// The foreground job now receives terminal signals.",
    },
    {
      title: "Execute and stream",
      summary: "Replace the children with the requested programs.",
      input: "Wired children + resolved executable paths",
      output: "Sorted file contents written to the terminal",
      explanation:
        "Executable lookup resolves the commands through PATH. The children replace their program images with cat and sort, keeping the wired descriptors. The parent closes its copies of the pipe ends. cat writes the file into the pipe; sort consumes the stream and emits its sorted output after reaching end-of-file.",
      decision:
        "Let ordinary Unix programs do their work. The shell coordinates arguments, processes, and descriptors rather than implementing cat or sort itself.",
      code: 'cat child:  exec(resolved_cat, ["cat", "file.txt"])\nsort child: exec(resolved_sort, ["sort"])\nparent:     close(both pipe ends)',
    },
    {
      title: "Clean up and return",
      summary: "Collect the job’s status and bring back the prompt.",
      input: "Foreground job finishes or stops",
      output: "Terminal restored to the shell; job status recorded",
      explanation:
        "The shell tracks its foreground children until the job completes or stops. Completed children are reaped so they do not remain as zombies; a stopped job stays tracked for job control. Terminal ownership returns to the shell, and a completed pipeline uses its final stage’s exit status.",
      decision:
        "A working command is only half the job. Correct cleanup keeps the next prompt, the next command, and later foreground/background operations reliable.",
      code: "wait for foreground job state changes\nrecord completion or stopped state\ntcsetpgrp(terminal, shell_group)\nif completed: pipeline_status = final_stage_status\nshow_prompt()",
    },
  ],
};
