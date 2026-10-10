import { BrandContextMenu } from "@/components/brand-context-menu";
import { fontHandwritten } from "@/lib/fonts";
import { cn } from "@/lib/utils";

import { MyMarkIsometric } from "./my-mark-isometric";

export function ProfileCover() {
  return (
    <BrandContextMenu>
      <div
        className={cn(
          "relative flex h-[300px] items-center justify-center border-x border-edge select-none sm:h-[420px]",
          "screen-line-before screen-line-after before:-top-px after:-bottom-px",
          "bg-background"
        )}
      >
        <MyMarkIsometric />
        <div
          id="cover-interaction-hint"
          className={cn(
            fontHandwritten.className,
            "pointer-events-none absolute bottom-20 left-full hidden w-40 flex-col items-start text-xl leading-none tracking-normal text-muted-foreground min-[1100px]:pointer-fine:flex"
          )}
        >
          <svg
            className="size-8 -scale-y-100 -rotate-6"
            viewBox="0 0 40 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M34 4c1 15-5 26-21 30" />
            <path d="m22 37-9-3 7.5-8" />
          </svg>
          <span className="ml-3 -rotate-6">
            follows your cursor
            <span className="block">click for a sound</span>
          </span>
        </div>
        <span
          className={cn(
            fontHandwritten.className,
            "pointer-events-none absolute right-4 bottom-8 hidden -rotate-6 text-xl leading-none text-muted-foreground pointer-coarse:block"
          )}
          aria-hidden="true"
        >
          tap for a sound
        </span>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-4 bottom-3 font-mono text-xs text-muted-foreground/60"
        >
          Fig. 1.
        </span>
      </div>
    </BrandContextMenu>
  );
}
