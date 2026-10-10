"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { PASSAGES, RETRIEVAL_EXAMPLES, retrieve } from "../data/retrieval";
import type { PassageId, RetrievalMode } from "../data/retrieval";
import { LabSelector } from "./lab-selector";

const MODES: { id: RetrievalMode; label: string; description: string }[] = [
  {
    id: "dense",
    label: "Dense",
    description: "Semantic candidates · curated similarity scores",
  },
  {
    id: "sparse",
    label: "Sparse",
    description: "Term-focused candidates · curated match scores",
  },
  {
    id: "hybrid",
    label: "Hybrid",
    description:
      "Reciprocal rank fusion · computed from the two candidate lists",
  },
  {
    id: "reranked",
    label: "Reranked",
    description: "Hybrid candidates reordered using curated relevance scores",
  },
];

export function RetrievalInspector() {
  const [exampleId, setExampleId] = useState(RETRIEVAL_EXAMPLES[0].id);
  const [mode, setMode] = useState<RetrievalMode>("hybrid");
  const [selected, setSelected] = useState<PassageId>(
    () => retrieve(RETRIEVAL_EXAMPLES[0], "hybrid")[0].id
  );
  const example =
    RETRIEVAL_EXAMPLES.find((item) => item.id === exampleId) ??
    RETRIEVAL_EXAMPLES[0];
  const results = retrieve(example, mode);
  const activeMode = MODES.find((item) => item.id === mode)!;

  return (
    <div>
      <div className="space-y-4 border-b border-edge p-4">
        <LabSelector
          label="Sample question"
          value={exampleId}
          options={RETRIEVAL_EXAMPLES.map((item) => ({
            value: item.id,
            label: item.question,
          }))}
          onValueChange={(value) => {
            const next = RETRIEVAL_EXAMPLES.find((item) => item.id === value)!;
            setExampleId(next.id);
            setSelected(retrieve(next, mode)[0].id);
          }}
        />
        <div className="flex flex-wrap gap-2" aria-label="Retrieval method">
          {MODES.map((item) => (
            <Button
              key={item.id}
              type="button"
              variant={mode === item.id ? "default" : "outline"}
              className="min-h-10 rounded-lg"
              aria-pressed={mode === item.id}
              onClick={() => {
                setMode(item.id);
                setSelected(retrieve(example, item.id)[0].id);
              }}
            >
              {item.label}
            </Button>
          ))}
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {example.note}
        </p>
      </div>
      <div className="grid md:grid-cols-2">
        <section className="min-w-0 border-b border-edge p-4 md:border-r md:border-b-0">
          <h3 className="font-medium">Retrieved passages</h3>
          <p
            className="mt-1 text-xs leading-relaxed text-muted-foreground"
            aria-live="polite"
          >
            {activeMode.description} · {results.length} candidates
          </p>
          <ol className="mt-4 space-y-2">
            {results.map((result, index) => {
              const passage = PASSAGES.find((item) => item.id === result.id)!;
              return (
                <li key={result.id}>
                  <button
                    type="button"
                    aria-pressed={selected === passage.id}
                    onClick={() => setSelected(passage.id)}
                    className={cn(
                      "w-full rounded-lg border p-3 text-left transition-colors hover:bg-accent2 focus-visible:outline-2 focus-visible:outline-ring",
                      selected === passage.id
                        ? "border-foreground/30 bg-muted/50"
                        : "border-edge"
                    )}
                  >
                    <span className="flex items-start justify-between gap-3">
                      <span className="text-sm font-medium">
                        <span className="mr-2 font-mono text-xs text-muted-foreground">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        {passage.clause}
                      </span>
                      <span className="font-mono text-xs text-muted-foreground">
                        {result.score.toFixed(mode === "hybrid" ? 4 : 2)}
                      </span>
                    </span>
                    <span className="mt-2 block text-xs leading-relaxed text-muted-foreground">
                      {passage.text}
                    </span>
                    <span className="mt-2 block font-mono text-[10px] text-muted-foreground">
                      PAGE {passage.page} · INSPECT SOURCE →
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
          <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
            Dense, sparse, and reranker scores are examples on different scales.
            Hybrid scores use Σ 1 / (60 + rank); they are not answer-confidence
            percentages.
          </p>
        </section>
        <section className="min-w-0 p-4">
          <h3 className="font-medium">Source document</h3>
          <p className="mt-1 font-mono text-xs text-muted-foreground">
            Sample service agreement · synthetic text
          </p>
          <ol className="mt-4 space-y-3">
            {PASSAGES.map((passage) => (
              <li
                key={passage.id}
                className={cn(
                  "rounded-lg border p-3 transition-colors",
                  selected === passage.id
                    ? "border-foreground/30 bg-muted/50"
                    : "border-edge"
                )}
              >
                <div className="flex items-start justify-between gap-2">
                  <h4 className="text-sm font-medium">{passage.clause}</h4>
                  <span className="shrink-0 font-mono text-[10px] text-muted-foreground">
                    P.{passage.page}
                  </span>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {passage.text}
                </p>
                {selected === passage.id && (
                  <p className="mt-2 font-mono text-[10px]">
                    SELECTED EVIDENCE
                  </p>
                )}
              </li>
            ))}
          </ol>
        </section>
      </div>
    </div>
  );
}
