export const SHELL_EXAMPLES = [
  {
    id: "sort",
    command: "cat file.txt | sort",
    argv: [["cat", "file.txt"], ["sort"]],
    output: "apple\nbanana\npear\n",
    note: "Two processes share one pipe. sort waits for end-of-file before emitting sorted lines.",
  },
  {
    id: "quoted",
    command: "printf 'hello | world\\n' | wc -c",
    argv: [
      ["printf", "hello | world\\n"],
      ["wc", "-c"],
    ],
    output: "14\n",
    note: "The pipe inside quotes stays inside printf's argument. Only the unquoted pipe creates another stage; printf emits 14 bytes, including the newline.",
  },
  {
    id: "three",
    command: "cat file.txt | sort | head -n 2",
    argv: [["cat", "file.txt"], ["sort"], ["head", "-n", "2"]],
    output: "apple\nbanana\n",
    note: "Three processes need two pipes. Each middle stage reads from the previous pipe and writes into the next one.",
  },
];

export const SHELL_PHASES = [
  {
    title: "Parse",
    description:
      "Separate the unquoted pipeline operators and build each command's arguments. No process has started yet.",
  },
  {
    title: "Create pipes",
    description:
      "Allocate one read/write descriptor pair for each connection. The shell initially owns these descriptors.",
  },
  {
    title: "Fork and wire",
    description:
      "Create all children in a shared process group. Wire stdin and stdout, and close unused descriptors in each child. Start every stage before waiting.",
  },
  {
    title: "Execute in foreground",
    description:
      "Hand the terminal to the job's process group and execute the programs. The parent closes its pipe copies. Ctrl+C and Ctrl+Z now target the foreground job.",
  },
  {
    title: "Reap and restore",
    description:
      "This sample job completes successfully. Reap all its children, record the final stage's exit status, and return terminal ownership to the shell.",
  },
];

export function describePipeline(argv: string[][]) {
  const pipes = Array.from(
    { length: Math.max(0, argv.length - 1) },
    (_, index) => ({
      name: `pipe ${index + 1}`,
      read: 3 + index * 2,
      write: 4 + index * 2,
    })
  );
  const processes = argv.map((args, index) => ({
    pid: 4101 + index,
    group: 4101,
    argv: args,
    stdin:
      index === 0
        ? "terminal"
        : `${pipes[index - 1].name} · read fd ${pipes[index - 1].read}`,
    stdout:
      index === argv.length - 1
        ? "terminal"
        : `${pipes[index].name} · write fd ${pipes[index].write}`,
  }));
  return { pipes, processes };
}
