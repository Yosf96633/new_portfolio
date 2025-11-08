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
        <ul className="flex flex-wrap gap-4 select-none">
          {TECH_STACK.map((tech) => {
            // Generate a unique identifier for mapping
            const identifier =
              tech.key ||
              tech.title.toLowerCase().replace(/\s+/g, "-").replace(/\//g, "-");

            // Determine if we should fetch from remote server or local public folder
            const isRemote = !!tech.key;

            // Map for local file names (based on your comments)
            const localFileMap: Record<string, string> = {
              python: "python",
              github: "github",
              qdrant: "qdrantdb",
              mongoose: "mongoose",
              zod: "zod",
              langchain: "langchain",
              langgraph: "langgraph",
              vercel: "vercel",
            };

            const localFileName = localFileMap[identifier] || identifier;

            // Build the appropriate image path
            const getImagePath = (variant?: "light" | "dark") => {
              if (isRemote) {
                // Fetch from remote server
                const suffix = variant ? `-${variant}` : "";
                return `https://assets.chanhdai.com/images/tech-stack-icons/${tech.key}${suffix}.svg`;
              } else {
                // Fetch from local public folder
                if (variant) {
                  // For themed icons, check your comment pattern
                  const themeVariant = variant === "light" ? "black" : "white";
                  return `/tech-icons/${localFileName}-${themeVariant}.svg`;
                }
                return `/tech-icons/${localFileName}.svg`;
              }
            };

            return (
              <li key={identifier} className="flex">
                <SimpleTooltip content={tech.title}>
                  <a
                    href={tech.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={tech.title}
                    className="transition-transform hover:scale-110"
                  >
                    {tech.theme ? (
                      <>
                        <Image
                          src={getImagePath("light")}
                          alt={`${tech.title} light icon`}
                          width={62}
                          height={62}
                          className="hidden [html.light_&]:block"
                          unoptimized
                        />
                        <Image
                          src={getImagePath("dark")}
                          alt={`${tech.title} dark icon`}
                          width={62}
                          height={62}
                          className="hidden [html.dark_&]:block"
                          unoptimized
                        />
                      </>
                    ) : (
                      <Image
                        src={getImagePath()}
                        alt={`${tech.title} icon`}
                        width={62}
                        height={62}
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
