import { ArrowUpRight, GitBranch } from "lucide-react";
import Link from "next/link";

import { DECISIONS } from "../data/decisions";
import { Panel, PanelHeader, PanelTitle } from "./panel";

export function DecisionLog() {
  return (
    <Panel id="decision-log">
      <PanelHeader>
        <PanelTitle>Decision Log</PanelTitle>
      </PanelHeader>
      <p className="border-b border-edge px-4 py-3 text-sm text-muted-foreground">
        The constraints, choices, and tradeoffs behind the systems I build.
      </p>
      <Link
        href="/decisions"
        className="group flex items-stretch transition-colors hover:bg-accent2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      >
        <div className="flex w-12 shrink-0 justify-center pt-4 text-muted-foreground">
          <GitBranch className="size-4" aria-hidden="true" />
        </div>
        <div className="min-w-0 flex-1 border-l border-dashed border-edge p-4">
          <div className="flex items-center justify-between gap-4">
            <h3 className="font-medium">Why the architecture looks this way</h3>
            <ArrowUpRight
              className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none"
              aria-hidden="true"
            />
          </div>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {DECISIONS.map((decision) => (
              <li key={decision.id}>
                <span className="font-medium text-foreground">
                  {decision.project}
                </span>
                {" · "}
                {decision.title}
              </li>
            ))}
          </ul>
          <p className="mt-4 font-mono text-xs text-muted-foreground">
            Explore {DECISIONS.length} decisions →
          </p>
        </div>
      </Link>
    </Panel>
  );
}
