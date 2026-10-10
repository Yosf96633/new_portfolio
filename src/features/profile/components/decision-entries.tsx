"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import {
  CollapsibleChevronsIcon,
  CollapsibleContent,
  CollapsibleTrigger,
  CollapsibleWithContext,
} from "@/components/ui/collapsible";
import { Tag } from "@/components/ui/tag";

import { DECISIONS } from "../data/decisions";

export function DecisionEntries() {
  return (
    <div>
      {DECISIONS.map((decision, index) => (
        <CollapsibleWithContext
          key={decision.id}
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
                  <span className="min-w-0 flex-1">
                    <span className="mb-1 block font-mono text-xs font-normal text-muted-foreground">
                      {decision.project}
                    </span>
                    <span className="block font-medium">{decision.title}</span>
                    <span className="mt-1 block text-sm font-normal text-muted-foreground">
                      {decision.summary}
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
            <div className="space-y-5 border-t border-edge p-4 sm:pl-16">
              <div className="flex flex-wrap gap-1.5">
                {decision.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
              <section className="space-y-2">
                <h4 className="font-mono text-xs text-muted-foreground">
                  CONSTRAINT
                </h4>
                <p className="text-sm leading-relaxed">{decision.constraint}</p>
              </section>
              <section className="space-y-2">
                <h4 className="font-mono text-xs text-muted-foreground">
                  ALTERNATIVES
                </h4>
                <dl className="divide-y divide-edge rounded-lg border border-edge">
                  {decision.alternatives.map((alternative) => (
                    <div key={alternative.title} className="space-y-1 p-3">
                      <dt className="text-sm font-medium">
                        {alternative.title}
                      </dt>
                      <dd className="text-sm leading-relaxed text-muted-foreground">
                        {alternative.consequence}
                      </dd>
                    </div>
                  ))}
                </dl>
              </section>
              <section className="space-y-2">
                <h4 className="font-mono text-xs text-muted-foreground">
                  CHOICE
                </h4>
                <p className="text-sm leading-relaxed">{decision.choice}</p>
              </section>
              <section className="space-y-2 border-l-2 border-edge pl-3">
                <h4 className="font-mono text-xs text-muted-foreground">
                  TRADEOFF
                </h4>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {decision.tradeoff}
                </p>
              </section>
              <section className="space-y-2">
                <h4 className="font-mono text-xs text-muted-foreground">
                  WHEN TO REVISIT
                </h4>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {decision.revisit}
                </p>
              </section>
              <div className="flex flex-wrap gap-x-5 gap-y-3 border-t border-edge pt-4 text-sm">
                <a
                  href={decision.projectHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 underline underline-offset-4"
                >
                  Explore {decision.project}
                  <ArrowUpRight className="size-3.5" aria-hidden="true" />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
                {decision.walkthroughHref && (
                  <Link
                    href={decision.walkthroughHref}
                    className="inline-flex items-center gap-1.5 underline underline-offset-4"
                  >
                    Follow the pipeline
                    <ArrowUpRight className="size-3.5" aria-hidden="true" />
                  </Link>
                )}
              </div>
            </div>
          </CollapsibleContent>
        </CollapsibleWithContext>
      ))}
    </div>
  );
}
