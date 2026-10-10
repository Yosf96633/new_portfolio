import { ArrowLeft, ArrowUpRight, Terminal } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { Tag } from "@/components/ui/tag";
import { BuildStages } from "@/features/profile/components/build-stages";
import {
  Panel,
  PanelContent,
  PanelHeader,
  PanelTitle,
} from "@/features/profile/components/panel";
import { SectionSeparator } from "@/features/profile/components/section-separator";
import { MYSHELL_BUILD } from "@/features/profile/data/builds";

export const metadata: Metadata = {
  title: "Inside myShell | Yousaf",
  description:
    "Follow a Unix pipeline through parsing, pipes, child processes, terminal ownership, and cleanup in a six-stage myShell walkthrough.",
};

export default function MyShellBuildPage() {
  return (
    <article className="mx-auto md:max-w-3xl">
      <div className="border-x border-edge px-4 py-4">
        <Link
          href="/#inside-the-build"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="size-4" aria-hidden="true" /> Back to portfolio
        </Link>
      </div>
      <Panel>
        <PanelContent className="space-y-4 py-6">
          <p className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
            <Terminal className="size-4" aria-hidden="true" /> Inside the Build
            / 01
          </p>
          <h1 className="text-3xl font-semibold text-balance sm:text-4xl">
            myShell: the life of a pipeline
          </h1>
          <p className="max-w-xl leading-relaxed text-muted-foreground">
            A command looks like a single line. Underneath it are processes,
            file descriptors, signals, and a terminal that needs to find its way
            back to the shell.
          </p>
          <div className="flex flex-wrap gap-1.5">
            <Tag>C++20</Tag>
            <Tag>POSIX</Tag>
            <Tag>Process management</Tag>
          </div>
          <a
            href={MYSHELL_BUILD.source}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm underline underline-offset-4"
          >
            Explore the repository{" "}
            <ArrowUpRight className="size-3.5" aria-hidden="true" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </PanelContent>
      </Panel>
      <SectionSeparator />
      <Panel>
        <PanelHeader>
          <PanelTitle>The command</PanelTitle>
        </PanelHeader>
        <PanelContent className="space-y-4">
          <pre className="overflow-x-auto rounded-lg border border-edge bg-code p-4 font-mono text-sm">
            <code>
              <span className="text-muted-foreground" aria-hidden="true">
                ${" "}
              </span>
              {MYSHELL_BUILD.command}
            </code>
          </pre>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Assume file.txt exists and both programs are available. cat reads
            the file, sort orders its lines, and the pipe connects them. This is
            an illustrative execution trace of the architecture described in
            myShell’s project overview.
          </p>
          <div
            className="grid grid-cols-3 divide-x divide-dashed divide-edge border-y border-edge py-3 text-center font-mono text-xs"
            aria-label="Data flows from cat through a pipe into sort"
          >
            <span>
              cat
              <br />
              <span className="text-muted-foreground">producer</span>
            </span>
            <span>
              → pipe →<br />
              <span className="text-muted-foreground">byte stream</span>
            </span>
            <span>
              sort
              <br />
              <span className="text-muted-foreground">consumer</span>
            </span>
          </div>
        </PanelContent>
      </Panel>
      <SectionSeparator />
      <Panel>
        <PanelHeader>
          <PanelTitle>From input to prompt</PanelTitle>
        </PanelHeader>
        <p className="border-b border-edge px-4 py-3 text-sm text-muted-foreground">
          Expand a stage to inspect its input, output, and the reasoning behind
          it. Execution sketches are pseudocode, not source excerpts.
        </p>
        <BuildStages stages={MYSHELL_BUILD.stages} />
      </Panel>
      <SectionSeparator />
      <Panel>
        <PanelHeader>
          <PanelTitle>What this reveals</PanelTitle>
        </PanelHeader>
        <PanelContent className="space-y-3 text-sm leading-relaxed">
          <p>
            The interesting part is the coordination: start the stages
            concurrently, close the right descriptors, give the job terminal
            control, then restore the shell when the job finishes or stops.
          </p>
          <p className="text-muted-foreground">
            Those boundaries also explain what needs testing: quoted operators,
            pipe end-of-file, foreground signals, stopped jobs, and final-stage
            exit status. myShell’s project overview includes CTest and
            pseudo-terminal integration coverage for these behaviors.
          </p>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 underline underline-offset-4"
          >
            Back to projects{" "}
            <ArrowUpRight className="size-3.5" aria-hidden="true" />
          </Link>
        </PanelContent>
      </Panel>
      <SectionSeparator />
    </article>
  );
}
