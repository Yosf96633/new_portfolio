import { SimpleTooltip } from "@/components/ui/tooltip";
import { USER } from "@/features/profile/data/user";
import { cn } from "@/lib/utils";
import { FlipSentences } from "@/registry/flip-sentences";

export function ProfileHeader() {
  return (
    <div className="screen-line-after flex border-x border-edge">
      <div className="shrink-0 border-r border-edge">
        <div className="mx-0.5 my-[3px]">
          <img
            className="size-32 rounded-full object-cover ring-1 ring-border ring-offset-2 ring-offset-background select-none sm:size-40"
            alt={`${USER.displayName}'s avatar`}
            src={USER.avatar}
            fetchPriority="high"
          />
        </div>
        <SimpleTooltip content="I'm from Pakistan">
          {/* Flag of Pakistan */}
          {/* Flag of Pakistan */}
          <svg
            className="absolute top-0 -left-px h-8 sm:h-9"
            viewBox="0 0 30 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* White stripe (left side) */}
            <rect width="7.5" height="20" fill="#FFFFFF" />

            {/* Green field (right side) */}
            <rect x="7.5" width="22.5" height="20" fill="#01411C" />

            {/* White crescent - rotated upward */}
            <g transform="translate(18, 10) rotate(-35)">
              <circle cx="0" cy="0" r="3.3" fill="#FFFFFF" />
              <circle cx="1" cy="0" r="2.6" fill="#01411C" />
            </g>

            {/* White star - positioned inside crescent opening */}
            <g transform="translate(20.5, 8.5) rotate(-35)">
              <polygon
                points="0,-1.6 0.4,-0.5 1.6,-0.5 0.6,0.3 1,1.4 0,0.6 -1,1.4 -0.6,0.3 -1.6,-0.5 -0.4,-0.5"
                fill="#FFFFFF"
              />
            </g>
          </svg>
        </SimpleTooltip>
      </div>

      <div className="flex flex-1 flex-col">
        <div
          className={cn(
            "flex grow items-end pb-1 pl-4",
            "bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] [--pattern-foreground:var(--color-edge)]/56"
          )}
        >
          <div className="dark:text-zinc-550 line-clamp-1 font-mono text-xs text-zinc-500 select-none max-sm:hidden">
            {"text-3xl "}
            <span className="inline dark:hidden">text-zinc-950</span>
            <span className="hidden dark:inline">text-zinc-50</span>
            {" font-medium"}
          </div>
        </div>

        <div className="border-t border-edge">
          <h1 className="flex items-center pl-4 text-3xl font-semibold">
            {USER.displayName}
          </h1>

          <div className="h-12 border-t border-edge py-1 pl-4 sm:h-auto">
            <FlipSentences sentences={USER.flipSentences} />
          </div>
        </div>
      </div>
    </div>
  );
}
