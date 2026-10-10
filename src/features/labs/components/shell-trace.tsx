"use client";

import { ArrowLeft, ArrowRight, RotateCcw } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { describePipeline, SHELL_EXAMPLES, SHELL_PHASES } from "../data/shell";
import { LabSelector } from "./lab-selector";

export function ShellTrace() {
  const [exampleId, setExampleId] = useState(SHELL_EXAMPLES[0].id);
  const [step, setStep] = useState(0);
  const example =
    SHELL_EXAMPLES.find((item) => item.id === exampleId) ?? SHELL_EXAMPLES[0];
  const pipeline = describePipeline(example.argv);
  const phase = SHELL_PHASES[step];
  const started = step >= 2;
  const complete = step === SHELL_PHASES.length - 1;

  return (
    <div>
      <div className="space-y-4 border-b border-edge p-4">
        <LabSelector
          label="Sample command"
          value={exampleId}
          options={SHELL_EXAMPLES.map((item) => ({
            value: item.id,
            label: item.command,
          }))}
          onValueChange={(value) => {
            setExampleId(value);
            setStep(0);
          }}
          className="font-mono text-xs"
        />
        <p className="text-sm leading-relaxed text-muted-foreground">
          {example.note}
        </p>
        <div className="flex flex-wrap items-center gap-2">
          <Button
            type="button"
            variant="outline"
            className="min-h-10 rounded-lg"
            disabled={step === 0}
            onClick={() => setStep((value) => Math.max(0, value - 1))}
          >
            <ArrowLeft aria-hidden="true" />
            Back
          </Button>
          <Button
            type="button"
            className="min-h-10 rounded-lg"
            disabled={complete}
            onClick={() =>
              setStep((value) => Math.min(SHELL_PHASES.length - 1, value + 1))
            }
          >
            Next stage
            <ArrowRight aria-hidden="true" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            className="min-h-10 rounded-lg"
            onClick={() => setStep(0)}
          >
            <RotateCcw aria-hidden="true" />
            Reset
          </Button>
          <span
            className="ml-auto font-mono text-xs text-muted-foreground"
            aria-live="polite"
          >
            {step + 1} / {SHELL_PHASES.length} · {phase.title}
          </span>
        </div>
      </div>
      <ol className="grid grid-cols-2 gap-2 border-b border-edge p-4 sm:grid-cols-5">
        {SHELL_PHASES.map((item, index) => (
          <li key={item.title}>
            <button
              type="button"
              onClick={() => setStep(index)}
              aria-current={step === index ? "step" : undefined}
              className={cn(
                "h-full min-h-14 w-full rounded-lg border p-2 text-left text-xs focus-visible:outline-2 focus-visible:outline-ring",
                step === index
                  ? "border-foreground/30 bg-muted/50"
                  : "border-edge text-muted-foreground hover:bg-accent2"
              )}
            >
              <span className="mb-1 block font-mono text-[10px]">
                {String(index + 1).padStart(2, "0")}
              </span>
              {item.title}
            </button>
          </li>
        ))}
      </ol>
      <div className="space-y-5 p-4">
        <section>
          <h3 className="font-medium">{phase.title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            {phase.description}
          </p>
        </section>
        <dl className="grid grid-cols-2 gap-3 rounded-lg border border-edge bg-muted/20 p-3 text-sm sm:grid-cols-3">
          <div>
            <dt className="font-mono text-[10px] text-muted-foreground">
              TERMINAL OWNER
            </dt>
            <dd className="mt-1">
              {step === 3 ? "Job group 4101" : "Shell group 4100"}
            </dd>
          </div>
          <div>
            <dt className="font-mono text-[10px] text-muted-foreground">
              JOB STATE
            </dt>
            <dd className="mt-1">
              {complete
                ? "Completed"
                : step === 3
                  ? "Foreground"
                  : started
                    ? "Children ready"
                    : "Preparing"}
            </dd>
          </div>
          <div>
            <dt className="font-mono text-[10px] text-muted-foreground">
              EXIT STATUS
            </dt>
            <dd className="mt-1">{complete ? "0 · final stage" : "Pending"}</dd>
          </div>
        </dl>
        <section>
          <h3 className="mb-3 font-medium">Commands and processes</h3>
          <div
            className={cn(
              "grid gap-3",
              pipeline.processes.length === 3
                ? "sm:grid-cols-3"
                : "sm:grid-cols-2"
            )}
          >
            {pipeline.processes.map((process, index) => (
              <div
                key={process.pid}
                className="min-w-0 rounded-lg border border-edge p-3"
              >
                <p className="font-mono text-xs text-muted-foreground">
                  STAGE {index + 1} ·{" "}
                  {complete
                    ? "REAPED"
                    : started
                      ? `PID ${process.pid}`
                      : "NOT STARTED"}
                </p>
                <h4 className="mt-2 font-mono text-sm font-medium">
                  {process.argv[0]}
                </h4>
                <pre className="mt-2 overflow-x-auto font-mono text-[10px] leading-relaxed">
                  <code>{JSON.stringify(process.argv, null, 2)}</code>
                </pre>
                <dl className="mt-3 space-y-2 border-t border-edge pt-3 text-xs">
                  <div>
                    <dt className="text-muted-foreground">stdin</dt>
                    <dd className="mt-0.5 break-words">
                      {started ? process.stdin : "Not wired"}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">stdout</dt>
                    <dd className="mt-0.5 break-words">
                      {started ? process.stdout : "Not wired"}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">process group</dt>
                    <dd className="mt-0.5">
                      {started ? process.group : "Not assigned"}
                    </dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
        </section>
        <section>
          <h3 className="mb-2 font-medium">Pipe connections</h3>
          <ul className="divide-y divide-edge rounded-lg border border-edge">
            {pipeline.pipes.map((pipe, index) => (
              <li key={pipe.name} className="space-y-1 p-3 text-xs">
                <p className="font-mono">
                  {example.argv[index][0]} → {pipe.name} →{" "}
                  {example.argv[index + 1][0]}
                </p>
                <p className="text-muted-foreground">
                  {step === 0
                    ? "Not allocated"
                    : complete
                      ? "All descriptors closed · end-of-file delivered"
                      : `Read fd ${pipe.read} / write fd ${pipe.write} · ${step >= 3 ? "parent copies closed" : "parent copies open"}`}
                </p>
              </li>
            ))}
          </ul>
        </section>
        <figure className="overflow-hidden rounded-lg border border-edge bg-code">
          <figcaption className="border-b border-edge px-3 py-2 font-mono text-xs text-muted-foreground">
            Simulated terminal
          </figcaption>
          <pre className="overflow-x-auto p-3 font-mono text-xs leading-relaxed">
            <code>{`shell$ ${example.command}\n${complete ? `${example.output}shell$ ` : `\n[${phase.title.toLowerCase()}]\n`}`}</code>
          </pre>
        </figure>
        <p className="text-xs leading-relaxed text-muted-foreground">
          Sample file.txt contains pear, apple, and banana on separate lines.
          Process IDs, descriptors, and output are illustrative; this explorer
          does not run a shell.
        </p>
      </div>
    </div>
  );
}
