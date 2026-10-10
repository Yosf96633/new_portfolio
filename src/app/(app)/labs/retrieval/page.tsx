import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { LabPage } from "@/features/labs/components/lab-page";
import { RetrievalInspector } from "@/features/labs/components/retrieval-inspector";

export const metadata: Metadata = {
  title: "Retrieval Inspector | Yousaf",
  description:
    "Compare dense, sparse, hybrid, and reranked passage lists in an interactive document retrieval demonstration.",
};

export default function RetrievalPage() {
  return (
    <LabPage
      title="Retrieval Inspector"
      description="The same question can produce different evidence. Compare retrieval methods, then select a result to locate its passage in the source."
      note="An offline demonstration with synthetic text and curated scores. Rank fusion is computed in your browser; no embeddings or model calls are made."
    >
      <RetrievalInspector />
      <div className="flex flex-wrap gap-5 border-t border-edge p-4 text-sm">
        <Link
          href="/builds/docsai"
          className="inline-flex items-center gap-1.5 underline underline-offset-4"
        >
          Inside DocsAI
          <ArrowUpRight className="size-3.5" aria-hidden="true" />
        </Link>
        <Link
          href="/decisions"
          className="inline-flex items-center gap-1.5 underline underline-offset-4"
        >
          Why hybrid retrieval?
          <ArrowUpRight className="size-3.5" aria-hidden="true" />
        </Link>
      </div>
    </LabPage>
  );
}
