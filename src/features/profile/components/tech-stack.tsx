import Image from "next/image";
import React from "react";

import { SimpleTooltip } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

import { TECH_STACK } from "../data/tech-stack";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

export function TechStack() {
  return (
    <Panel id="stack">
      <PanelHeader>
        <PanelTitle>Stack</PanelTitle>
      </PanelHeader>

      <PanelContent
        className={cn(
          "[--pattern-foreground:var(--color-zinc-950)]/5 dark:[--pattern-foreground:var(--color-white)]/5",
          "bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center",
          "bg-zinc-950/0.75 dark:bg-white/0.75"
        )}
      >
        <ul className="flex flex-wrap items-center justify-center gap-2 px-2 select-none sm:gap-3 sm:px-4 md:gap-4 md:px-6">
          {TECH_STACK.map((tech) => {
            return (
              <li key={tech.title} className="flex">
                <SimpleTooltip content={tech.title}>
                  <a
                    href={tech.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={tech.title}
                    className="flex min-h-11 min-w-11 items-center justify-center transition-transform hover:scale-110 active:scale-95"
                  >
                    {tech.darkIcon ? (
                      <>
                        <Image
                          src={tech.icon}
                          alt={`${tech.title} icon`}
                          width={32}
                          height={32}
                          className="hidden size-6 sm:size-7 md:size-8 [html.light_&]:block"
                          unoptimized
                        />
                        <Image
                          src={tech.darkIcon}
                          alt={`${tech.title} icon`}
                          width={32}
                          height={32}
                          className="hidden size-6 sm:size-7 md:size-8 [html.dark_&]:block"
                          unoptimized
                        />
                      </>
                    ) : (
                      <Image
                        src={tech.icon}
                        alt={`${tech.title} icon`}
                        width={32}
                        height={32}
                        className="size-6 sm:size-7 md:size-8"
                        unoptimized
                      />
                    )}
                    <span className="sr-only">{tech.title}</span>
                  </a>
                </SimpleTooltip>
              </li>
            );
          })}
        </ul>
      </PanelContent>
    </Panel>
  );
}
