import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { Panel, PanelContent } from "@/features/profile/components/panel";
import { SectionSeparator } from "@/features/profile/components/section-separator";

export function LabPage({
  title,
  description,
  note,
  children,
}: {
  title: string;
  description: string;
  note: string;
  children: React.ReactNode;
}) {
  return (
    <article className="mx-auto md:max-w-3xl">
      <div className="border-x border-edge px-4 py-4">
        <Link
          href="/labs"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Back to labs
        </Link>
      </div>
      <Panel>
        <PanelContent className="space-y-3 py-6">
          <p className="font-mono text-xs text-muted-foreground">
            Labs / interactive explorer
          </p>
          <h1 className="text-3xl font-semibold text-balance sm:text-4xl">
            {title}
          </h1>
          <p className="max-w-xl leading-relaxed text-muted-foreground">
            {description}
          </p>
          <p className="text-xs leading-relaxed text-muted-foreground">
            {note}
          </p>
        </PanelContent>
      </Panel>
      <SectionSeparator />
      <Panel aria-label={title}>{children}</Panel>
      <SectionSeparator />
    </article>
  );
}
