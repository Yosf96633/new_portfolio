import { ArrowLeft, ArrowUpRight, Workflow } from "lucide-react";
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
import { AUTOHUNT_BUILD } from "@/features/profile/data/autohunt-build";

export const metadata: Metadata = {
  title: "Inside AutoHunt | Yousaf",
  description:
    "Follow AutoHunt from CV parsing and job matching through cover-letter refinement, human approval, browser automation, and outcome tracking.",
};

export default function AutoHuntBuildPage() {
  return (
    <article className="mx-auto md:max-w-3xl">
      <div className="border-x border-edge px-4 py-4">
        <Link
          href="/#inside-the-build"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Back to portfolio
        </Link>
      </div>
      <Panel>
        <PanelContent className="space-y-4 py-6">
          <p className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
            <Workflow className="size-4" aria-hidden="true" />
            Inside the Build / 03
          </p>
          <h1 className="text-3xl font-semibold text-balance sm:text-4xl">
            AutoHunt: from CV to reviewed application
          </h1>
          <p className="max-w-xl leading-relaxed text-muted-foreground">
            Follow a job application through a stateful AI workflow, with a
            human decision between preparing the material and submitting it.
          </p>
          <div className="flex flex-wrap gap-1.5">
            <Tag>LangGraph</Tag>
            <Tag>Playwright</Tag>
            <Tag>Human approval</Tag>
            <Tag>10 stages</Tag>
          </div>
          <a
            href={AUTOHUNT_BUILD.source}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm underline underline-offset-4"
          >
            Explore the repository
            <ArrowUpRight className="size-3.5" aria-hidden="true" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </PanelContent>
      </Panel>
      <SectionSeparator />
      <Panel>
        <PanelHeader>
          <PanelTitle>The task</PanelTitle>
        </PanelHeader>
        <PanelContent className="space-y-4 text-sm leading-relaxed">
          <p>
            Start with a resume, discover relevant roles, and prepare an
            application the candidate can review. This walkthrough summarizes
            the architecture documented in the project overview; the execution
            sketches are illustrative pseudocode.
          </p>
          <dl className="divide-y divide-edge border-y border-edge">
            <div className="space-y-1 py-3">
              <dt className="font-mono text-xs text-muted-foreground">
                PREPARE · STAGES 01–06
              </dt>
              <dd>Parse → discover → match → draft → critique → refine</dd>
            </div>
            <div className="space-y-1 py-3">
              <dt className="font-mono text-xs text-muted-foreground">
                REVIEW · STAGE 07
              </dt>
              <dd>Checkpoint and pause for the candidate’s decision</dd>
            </div>
            <div className="space-y-1 py-3">
              <dt className="font-mono text-xs text-muted-foreground">
                ACT AND RECORD · STAGES 08–10
              </dt>
              <dd>
                Submit approved material → track the outcome → compose a digest
              </dd>
            </div>
          </dl>
        </PanelContent>
      </Panel>
      <SectionSeparator />
      <Panel>
        <PanelHeader>
          <PanelTitle>Through the workflow</PanelTitle>
        </PanelHeader>
        <p className="border-b border-edge px-4 py-3 text-sm text-muted-foreground">
          Expand a stage to inspect its input, output, and purpose.
        </p>
        <BuildStages stages={AUTOHUNT_BUILD.stages} />
      </Panel>
      <SectionSeparator />
      <Panel>
        <PanelHeader>
          <PanelTitle>What this reveals</PanelTitle>
        </PanelHeader>
        <PanelContent className="space-y-3 text-sm leading-relaxed">
          <p>
            The workflow coordinates both data and authority: structured
            candidate context informs matching and drafting, checkpoints
            preserve progress, and approval controls the transition to browser
            automation.
          </p>
          <p className="text-muted-foreground">
            The result is a process the candidate can inspect before action and
            audit afterward, rather than a single prompt that tries to do
            everything at once.
          </p>
          <Link
            href="/#inside-the-build"
            className="inline-flex items-center gap-1.5 underline underline-offset-4"
          >
            More walkthroughs
            <ArrowUpRight className="size-3.5" aria-hidden="true" />
          </Link>
        </PanelContent>
      </Panel>
      <SectionSeparator />
    </article>
  );
}
