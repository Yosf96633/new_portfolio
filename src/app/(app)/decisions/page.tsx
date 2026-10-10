import { ArrowLeft, GitBranch } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { DecisionEntries } from "@/features/profile/components/decision-entries";
import {
  Panel,
  PanelContent,
  PanelHeader,
  PanelTitle,
} from "@/features/profile/components/panel";
import { SectionSeparator } from "@/features/profile/components/section-separator";
import { DECISIONS } from "@/features/profile/data/decisions";

export const metadata: Metadata = {
  title: "Decision Log | Yousaf",
  description:
    "Explore the constraints and tradeoffs behind DocsAI's hybrid retrieval, Vidly's analysis queue, and myShell's process groups.",
};

export default function DecisionsPage() {
  return (
    <article className="mx-auto md:max-w-3xl">
      <div className="border-x border-edge px-4 py-4">
        <Link
          href="/#decision-log"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Back to portfolio
        </Link>
      </div>
      <Panel>
        <PanelContent className="space-y-4 py-6">
          <p className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
            <GitBranch className="size-4" aria-hidden="true" />
            Engineering notes / {String(DECISIONS.length).padStart(2, "0")}{" "}
            decisions
          </p>
          <h1 className="text-3xl font-semibold sm:text-4xl">Decision Log</h1>
          <p className="max-w-xl leading-relaxed text-muted-foreground">
            Every architecture carries a tradeoff. These notes connect a
            project's constraints to the shape of its implementation, and the
            costs that come with it.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Based on the architectures documented in my project overviews.
            Alternatives describe other possible approaches; they are not a
            record of benchmarked comparisons.
          </p>
        </PanelContent>
      </Panel>
      <SectionSeparator />
      <Panel>
        <PanelHeader>
          <PanelTitle>
            Behind the choices
            <sup className="ml-1 font-mono text-sm text-muted-foreground select-none">
              ({DECISIONS.length})
            </sup>
          </PanelTitle>
        </PanelHeader>
        <p className="border-b border-edge px-4 py-3 text-sm text-muted-foreground">
          Expand a decision to follow its constraint, alternatives, choice, and
          tradeoff.
        </p>
        <DecisionEntries />
      </Panel>
      <SectionSeparator />
    </article>
  );
}
