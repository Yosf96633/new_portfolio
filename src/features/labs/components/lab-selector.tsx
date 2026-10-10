"use client";

import { ChevronDown } from "lucide-react";
import { useId } from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

type LabSelectorProps = {
  label: string;
  value: string;
  options: { value: string; label: string }[];
  onValueChange: (value: string) => void;
  className?: string;
};

export function LabSelector({
  label,
  value,
  options,
  onValueChange,
  className,
}: LabSelectorProps) {
  const id = useId();
  const selected = options.find((option) => option.value === value);

  return (
    <div className="space-y-2">
      <span
        id={`${id}-label`}
        className="block font-mono text-xs text-muted-foreground uppercase"
      >
        {label}
      </span>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            type="button"
            variant="outline"
            aria-labelledby={`${id}-label ${id}-value`}
            className={cn(
              "h-auto min-h-11 w-full min-w-0 justify-between rounded-lg border-edge bg-background py-2 text-left whitespace-normal",
              className
            )}
          >
            <span id={`${id}-value`} className="min-w-0 break-words">
              {selected?.label}
            </span>
            <ChevronDown aria-hidden="true" className="size-4 shrink-0" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          aria-labelledby={`${id}-label`}
          className="max-h-[var(--radix-dropdown-menu-content-available-height)] w-[var(--radix-dropdown-menu-trigger-width)] max-w-[calc(100vw-2rem)] overflow-y-auto rounded-lg"
        >
          <DropdownMenuRadioGroup value={value} onValueChange={onValueChange}>
            {options.map((option) => (
              <DropdownMenuRadioItem
                key={option.value}
                value={option.value}
                className={cn(
                  "min-h-11 rounded-md py-3 pr-3 leading-relaxed break-words whitespace-normal",
                  className
                )}
              >
                {option.label}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
