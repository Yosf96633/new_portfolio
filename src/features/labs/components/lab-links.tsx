import { ArrowUpRight, FileSearch, Terminal } from "lucide-react";
import Link from "next/link";

import {
  Panel,
  PanelHeader,
  PanelTitle,
} from "@/features/profile/components/panel";

const LABS = [
  {
    href: "/labs/retrieval",
    title: "Retrieval Inspector",
    description:
      "Compare semantic search, term matching, hybrid fusion, and reranking against a sample document.",
    icon: FileSearch,
  },
  {
    href: "/labs/shell",
    title: "Shell Trace",
    description:
      "Step through a pipeline and inspect its arguments, pipes, processes, and terminal ownership.",
    icon: Terminal,
  },
];

export function LabLinks() {
  return (
    <Panel id="labs">
      <PanelHeader>
        <PanelTitle>Labs</PanelTitle>
      </PanelHeader>
      {LABS.map((lab) => (
        <Link
          key={lab.href}
          href={lab.href}
          className="group flex items-stretch border-b border-edge last:border-b-0 hover:bg-accent2 focus-visible:outline-2 focus-visible:outline-ring"
        >
          <div className="flex w-12 shrink-0 justify-center pt-4 text-muted-foreground">
            <lab.icon className="size-4" aria-hidden="true" />
          </div>
          <div className="min-w-0 flex-1 border-l border-dashed border-edge p-4">
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-medium">{lab.title}</h3>
              <ArrowUpRight
                className="size-4 shrink-0 text-muted-foreground"
                aria-hidden="true"
              />
            </div>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              {lab.description}
            </p>
          </div>
        </Link>
      ))}
    </Panel>
  );
}
