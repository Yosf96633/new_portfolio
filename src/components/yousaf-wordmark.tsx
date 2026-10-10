"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import { useId } from "react";

// Hover gradient and cropped composition adapted from Chánh Đại's
// MIT-licensed site-footer-brand.tsx. Geometry spells Yousaf.
type Point = [number, number];
const rect = (x: number, y: number, width: number, height: number): Point[] => [
  [x, y],
  [x + width, y],
  [x + width, y + height],
  [x, y + height],
];
const glyphs: { offset: number; shapes: Point[][] }[] = [
  {
    offset: 0,
    shapes: [
      [
        [1, 1],
        [33, 1],
        [33, 65],
        [65, 65],
        [65, 97],
        [97, 97],
        [97, 65],
        [129, 65],
        [129, 1],
        [161, 1],
        [161, 65],
        [129, 65],
        [129, 97],
        [97, 97],
        [97, 257],
        [65, 257],
        [65, 97],
        [33, 97],
        [33, 65],
        [1, 65],
      ],
    ],
  },
  {
    offset: 193,
    shapes: [
      rect(32, 65, 96, 32),
      rect(0, 97, 32, 128),
      rect(128, 97, 32, 128),
      rect(32, 225, 96, 32),
    ],
  },
  {
    offset: 385,
    shapes: [
      rect(0, 65, 32, 160),
      rect(128, 65, 32, 192),
      rect(32, 225, 96, 32),
    ],
  },
  {
    offset: 577,
    shapes: [
      rect(32, 65, 128, 32),
      rect(0, 97, 32, 64),
      rect(32, 129, 96, 32),
      rect(128, 161, 32, 64),
      rect(0, 225, 128, 32),
    ],
  },
  {
    offset: 769,
    shapes: [
      [
        [32, 65],
        [160, 65],
        [160, 257],
        [128, 257],
        [128, 225],
        [96, 225],
        [96, 193],
        [128, 193],
        [128, 97],
        [32, 97],
      ],
      rect(0, 97, 32, 128),
      rect(32, 225, 64, 32),
    ],
  },
  {
    offset: 961,
    shapes: [
      [
        [32, 1],
        [128, 1],
        [128, 33],
        [64, 33],
        [64, 65],
        [128, 65],
        [128, 97],
        [64, 97],
        [64, 257],
        [32, 257],
        [32, 97],
        [0, 97],
        [0, 65],
        [32, 65],
      ],
    ],
  },
];
const WIDTH = 1090;
const PATH = glyphs
  .flatMap(({ offset, shapes }) =>
    shapes.map(
      (shape) => `M${shape.map(([x, y]) => `${x + offset} ${y}`).join("L")}Z`
    )
  )
  .join("");

export function YousafWordmark() {
  const id = useId();
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0.5);
  const gradientX = useSpring(useTransform(pointerX, [0, 1], [0, WIDTH]), {
    stiffness: 150,
    damping: 25,
  });

  return (
    <div className="screen-line-after pt-8 after:z-1 after:bg-foreground/15 sm:pt-16">
      <div
        className="overflow-hidden"
        onPointerMove={(event) => {
          if (reduceMotion) return;
          const rect = event.currentTarget.getBoundingClientRect();
          pointerX.set(
            Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width))
          );
        }}
        onPointerLeave={() => pointerX.set(0.5)}
        onPointerCancel={() => pointerX.set(0.5)}
      >
        <div className="flex w-full translate-y-[37.5%] items-center justify-center px-4 sm:px-8">
          <svg
            className="h-auto w-full max-w-[1536px]"
            viewBox={`0 0 ${WIDTH} 258`}
            fill="none"
            role="img"
            aria-label="Yousaf"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d={PATH} fill={`url(#${id}-wordmark)`} />
            <path d={PATH} className="stroke-foreground/10" strokeWidth="2" />
            <defs>
              <motion.linearGradient
                id={`${id}-wordmark`}
                x1={gradientX}
                y1="1"
                x2={WIDTH / 2}
                y2="257"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset="0.625"
                  stopColor="var(--foreground)"
                  stopOpacity="0"
                />
                <stop offset="1" stopColor="var(--foreground)" />
              </motion.linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 hidden h-px w-1/2 -translate-x-1/2 bg-[linear-gradient(90deg,transparent,rgba(228,228,231,0.3),transparent)] dark:block"
        aria-hidden="true"
      />
    </div>
  );
}
