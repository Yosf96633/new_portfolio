import { ArrowUpRight, FileSearch, Terminal } from "lucide-react";
import Link from "next/link";

import { Tag } from "@/components/ui/tag";

import { DOCSAI_BUILD, MYSHELL_BUILD } from "../data/builds";
import { Panel, PanelHeader, PanelTitle } from "./panel";

const BUILDS = [
  {
    href: "/builds/myshell",
    title: "myShell: the life of a pipeline",
    description:
      "From a line of text to two processes, a shared pipe, and a prompt that returns.",
    icon: Terminal,
    tags: ["C++20", "POSIX", `${MYSHELL_BUILD.stages.length} stages`],
  },
  {
    href: "/builds/docsai",
    title: "DocsAI: from PDF to cited answer",
    description:
      "Follow a document through ingestion, hybrid search, reranking, and a streamed response with sources.",
    icon: FileSearch,
    tags: [
      "LangGraph",
      "Hybrid retrieval",
      `${DOCSAI_BUILD.stages.length} stages`,
    ],
  },
];

export function InsideTheBuild() {
  return (
    <Panel id="inside-the-build">
      <PanelHeader>
        <PanelTitle>Inside the Build</PanelTitle>
      </PanelHeader>
      <p className="border-b border-edge px-4 py-3 text-sm text-muted-foreground">
        Follow a task through the system, one stage at a time.
      </p>
      {BUILDS.map((build) => (
        <Link
          key={build.href}
          href={build.href}
          className="group flex items-stretch border-b border-edge transition-colors last:border-b-0 hover:bg-accent2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          <div className="flex w-12 shrink-0 justify-center pt-4 text-muted-foreground">
            <build.icon className="size-4" aria-hidden="true" />
          </div>
          <div className="min-w-0 flex-1 border-l border-dashed border-edge p-4">
            <div className="flex items-center justify-between gap-4">
              <h3 className="font-medium">{build.title}</h3>
              <ArrowUpRight
                className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none"
                aria-hidden="true"
              />
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              {build.description}
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {build.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
            <p className="mt-4 font-mono text-xs text-muted-foreground">
              Read the walkthrough →
            </p>
          </div>
        </Link>
      ))}
    </Panel>
  );
}
