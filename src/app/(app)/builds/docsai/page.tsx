import { ArrowLeft, ArrowUpRight, FileSearch } from "lucide-react";
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
import { DOCSAI_BUILD } from "@/features/profile/data/builds";

export const metadata: Metadata = {
  title: "Inside DocsAI | Yousaf",
  description:
    "Follow DocsAI from PDF ingestion to hybrid retrieval, reranking, and a streamed answer with citations in a seven-stage walkthrough.",
};

export default function DocsAIBuildPage() {
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
            <FileSearch className="size-4" aria-hidden="true" />
            Inside the Build / 02
          </p>
          <h1 className="text-3xl font-semibold text-balance sm:text-4xl">
            DocsAI: from PDF to cited answer
          </h1>
          <p className="max-w-xl leading-relaxed text-muted-foreground">
            An answer starts well before the model writes its first token.
            Follow how a PDF becomes searchable evidence, and how that evidence
            returns to the reader as a citation.
          </p>
          <div className="flex flex-wrap gap-1.5">
            <Tag>FastAPI</Tag>
            <Tag>LangGraph</Tag>
            <Tag>Qdrant</Tag>
            <Tag>Hybrid retrieval</Tag>
          </div>
          <a
            href={DOCSAI_BUILD.source}
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
        <PanelContent className="space-y-4">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Upload a legal PDF, then ask a question about its contents. This
            example follows the architecture documented in the project's
            overview; it does not use a real contract or a generated legal
            answer.
          </p>
          <figure className="rounded-lg border border-edge bg-code">
            <figcaption className="border-b border-edge px-4 py-2 font-mono text-xs text-muted-foreground">
              Example question
            </figcaption>
            <blockquote className="p-4 text-sm leading-relaxed">
              {DOCSAI_BUILD.question}
            </blockquote>
          </figure>
          <dl className="divide-y divide-edge border-y border-edge text-sm">
            <div className="space-y-1 py-3">
              <dt className="font-mono text-xs text-muted-foreground">
                DOCUMENT INGESTION · STAGES 01–03
              </dt>
              <dd>Validate → extract and locate → embed and index</dd>
            </div>
            <div className="space-y-1 py-3">
              <dt className="font-mono text-xs text-muted-foreground">
                CHAT GENERATION · STAGES 04–07
              </dt>
              <dd>
                Scope the thread → retrieve → rerank → stream with citations
              </dd>
            </div>
          </dl>
          <p className="text-sm leading-relaxed text-muted-foreground">
            These are two separate LangGraph workflows. Ingestion prepares the
            document for search; a chat question uses that prepared index to
            find supporting passages.
          </p>
        </PanelContent>
      </Panel>
      <SectionSeparator />
      <Panel>
        <PanelHeader>
          <PanelTitle>From document to evidence</PanelTitle>
        </PanelHeader>
        <p className="border-b border-edge px-4 py-3 text-sm text-muted-foreground">
          Expand a stage to inspect its input, output, and purpose. Execution
          sketches are illustrative pseudocode.
        </p>
        <BuildStages stages={DOCSAI_BUILD.stages} />
      </Panel>
      <SectionSeparator />
      <Panel>
        <PanelHeader>
          <PanelTitle>What this reveals</PanelTitle>
        </PanelHeader>
        <PanelContent className="space-y-3 text-sm leading-relaxed">
          <p>
            The central connection is between an answer and its evidence. Text
            extraction preserves location, retrieval finds candidate passages,
            reranking narrows the context, and citations bring the reader back
            to the PDF.
          </p>
          <p className="text-muted-foreground">
            The quality of that connection depends on each stage. Missing text,
            irrelevant retrieval, or inaccurate location metadata can weaken the
            result even when the answer reads fluently.
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-3">
            <Link
              href="/labs/retrieval"
              className="inline-flex items-center gap-1.5 underline underline-offset-4"
            >
              Inspect retrieval
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </Link>
            <Link
              href="/decisions"
              className="inline-flex items-center gap-1.5 underline underline-offset-4"
            >
              Why hybrid retrieval?
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </Link>
            <Link
              href="/#inside-the-build"
              className="inline-flex items-center gap-1.5 underline underline-offset-4"
            >
              More walkthroughs
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </Link>
          </div>
        </PanelContent>
      </Panel>
      <SectionSeparator />
    </article>
  );
}
