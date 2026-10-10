"use client";

import {
  CollapsibleChevronsIcon,
  CollapsibleContent,
  CollapsibleTrigger,
  CollapsibleWithContext,
} from "@/components/ui/collapsible";

import type { BuildStage } from "../data/builds";

export function BuildStages({ stages }: { stages: BuildStage[] }) {
  return (
    <div>
      {stages.map((stage, index) => (
        <CollapsibleWithContext
          key={stage.title}
          defaultOpen={index === 0}
          className="border-b border-edge last:border-b-0"
        >
          <div className="flex">
            <span
              aria-hidden="true"
              className="w-12 shrink-0 pt-4 text-center font-mono text-xs text-muted-foreground"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="min-w-0 flex-1 border-l border-dashed border-edge">
              <h3>
                <CollapsibleTrigger className="flex w-full items-center gap-4 p-4 text-left hover:bg-accent2 focus-visible:outline-2 focus-visible:outline-ring">
                  <span className="flex-1">
                    <span className="block font-medium">{stage.title}</span>
                    <span className="mt-1 block text-sm font-normal text-muted-foreground">
                      {stage.summary}
                    </span>
                  </span>
                  <span
                    className="shrink-0 text-muted-foreground [&_svg]:size-4"
                    aria-hidden="true"
                  >
                    <CollapsibleChevronsIcon />
                  </span>
                </CollapsibleTrigger>
              </h3>
            </div>
          </div>
          <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down motion-reduce:animate-none">
            <div className="space-y-4 border-t border-edge p-4 sm:pl-16">
              <dl className="grid gap-3 text-sm sm:grid-cols-2">
                <div>
                  <dt className="mb-1 font-mono text-xs text-muted-foreground">
                    INPUT
                  </dt>
                  <dd className="break-words">{stage.input}</dd>
                </div>
                <div>
                  <dt className="mb-1 font-mono text-xs text-muted-foreground">
                    OUTPUT
                  </dt>
                  <dd className="break-words">{stage.output}</dd>
                </div>
              </dl>
              <p className="text-sm leading-relaxed">{stage.explanation}</p>
              <figure className="overflow-hidden rounded-lg border border-edge bg-code">
                <figcaption className="border-b border-edge px-3 py-2 font-mono text-xs text-muted-foreground">
                  Execution sketch · pseudocode
                </figcaption>
                <pre className="overflow-x-auto p-3 font-mono text-xs leading-relaxed">
                  <code>{stage.code}</code>
                </pre>
              </figure>
              <div className="border-l-2 border-edge pl-3">
                <p className="mb-1 font-mono text-xs text-muted-foreground">
                  WHY THIS MATTERS
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {stage.decision}
                </p>
              </div>
            </div>
          </CollapsibleContent>
        </CollapsibleWithContext>
      ))}
    </div>
  );
}
