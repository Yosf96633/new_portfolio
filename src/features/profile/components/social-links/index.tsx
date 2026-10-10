import React from "react";

import { fontHandwritten } from "@/lib/fonts";
import { cn } from "@/lib/utils";

import { SOCIAL_LINKS } from "../../data/social-links";
import { Panel } from "../panel";
import { SocialLinkItem } from "./social-link-item";

export function SocialLinks() {
  return (
    <Panel className="relative">
      <h2 className="sr-only">Social Links</h2>

      <div className="relative">
        <div className="pointer-events-none absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2">
          <div className="border-r border-edge"></div>
          <div className="border-l border-edge"></div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {SOCIAL_LINKS.map((link, index) => {
            return <SocialLinkItem key={index} {...link} />;
          })}
        </div>
      </div>
      <div
        aria-hidden="true"
        className={cn(
          fontHandwritten.className,
          "pointer-events-none absolute -top-4 right-full mr-4 hidden w-20 flex-col items-end text-xl leading-none tracking-normal text-muted-foreground select-none lg:flex"
        )}
      >
        <span className="-rotate-6">follow me</span>
        <svg
          className="size-7 translate-x-3 -scale-x-100 -rotate-6"
          viewBox="0 0 40 40"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M34 4c1 15-5 26-21 30" />
          <path d="m22 37-9-3 7.5-8" />
        </svg>
      </div>
    </Panel>
  );
}
