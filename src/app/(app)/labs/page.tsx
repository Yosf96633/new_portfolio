import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { LabLinks } from "@/features/labs/components/lab-links";
import { Panel, PanelContent } from "@/features/profile/components/panel";
import { SectionSeparator } from "@/features/profile/components/section-separator";

export const metadata: Metadata = {
  title: "Labs | Yousaf",
  description:
    "Interactive explorers for document retrieval and Unix shell pipelines.",
};

export default function LabsPage() {
  return (
    <article className="mx-auto md:max-w-3xl">
      <div className="border-x border-edge px-4 py-4">
        <Link
          href="/#labs"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Back to portfolio
        </Link>
      </div>
      <Panel>
        <PanelContent className="space-y-3 py-6">
          <p className="font-mono text-xs text-muted-foreground">
            Explore the mechanisms
          </p>
          <h1 className="text-3xl font-semibold sm:text-4xl">Labs</h1>
          <p className="max-w-xl leading-relaxed text-muted-foreground">
            Small, interactive windows into the systems I build. Change a
            question or step through a command to see what happens underneath.
          </p>
        </PanelContent>
      </Panel>
      <SectionSeparator />
      <LabLinks />
      <SectionSeparator />
    </article>
  );
}
