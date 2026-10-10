import { ArrowUpRight, Terminal } from "lucide-react";
import Link from "next/link";

import { Tag } from "@/components/ui/tag";

import { Panel, PanelHeader, PanelTitle } from "./panel";

export function InsideTheBuild() {
  return (
    <Panel id="inside-the-build">
      <PanelHeader>
        <PanelTitle>Inside the Build</PanelTitle>
      </PanelHeader>
      <p className="border-b border-edge px-4 py-3 text-sm text-muted-foreground">
        Follow a command through the system, one decision at a time.
      </p>
      <Link
        href="/builds/myshell"
        className="group flex items-stretch transition-colors hover:bg-accent2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      >
        <div className="flex w-12 shrink-0 justify-center pt-4 text-muted-foreground">
          <Terminal className="size-4" aria-hidden="true" />
        </div>
        <div className="min-w-0 flex-1 border-l border-dashed border-edge p-4">
          <div className="flex items-center justify-between gap-4">
            <h3 className="font-medium">myShell: the life of a pipeline</h3>
            <ArrowUpRight
              className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none"
              aria-hidden="true"
            />
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            From a line of text to two processes, a shared pipe, and a prompt
            that returns.
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            <Tag>C++20</Tag>
            <Tag>POSIX</Tag>
            <Tag>6 stages</Tag>
          </div>
          <p className="mt-4 font-mono text-xs text-muted-foreground">
            Read the walkthrough →
          </p>
        </div>
      </Link>
    </Panel>
  );
}
