import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { LabPage } from "@/features/labs/components/lab-page";
import { ShellTrace } from "@/features/labs/components/shell-trace";

export const metadata: Metadata = {
  title: "Shell Trace | Yousaf",
  description:
    "Step through Unix pipeline parsing, pipe allocation, process creation, terminal handoff, and cleanup.",
};

export default function ShellPage() {
  return (
    <LabPage
      title="Shell Trace"
      description="A command line hides a small process graph. Step through a sample pipeline and watch arguments, descriptors, and terminal ownership take shape."
      note="A guided simulation inspired by myShell. The sample commands are not executed, and no local files are accessed."
    >
      <ShellTrace />
      <div className="border-t border-edge p-4 text-sm">
        <Link
          href="/builds/myshell"
          className="inline-flex items-center gap-1.5 underline underline-offset-4"
        >
          Inside myShell
          <ArrowUpRight className="size-3.5" aria-hidden="true" />
        </Link>
      </div>
    </LabPage>
  );
}
