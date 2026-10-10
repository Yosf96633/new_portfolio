"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";
import { useEffect, useId, useRef } from "react";

// MY pixel geometry projected into an isometric plane. The outline spotlight
// and pressed extrusion are inspired by Chánh Đại's MIT-licensed cover.
const GLYPHS = [
  { offset: 0, rows: ["10001", "11011", "10101", "10001"] },
  { offset: 352, rows: ["10001", "01010", "00100", "00100"] },
];
const CELL = 64;
const DEPTH = 28;
const project = (x: number, y: number) => [
  8 + ((x + y) * Math.sqrt(3)) / 2,
  345 + (y - x) / 2,
];
const point = ([x, y]: number[], offset = 0) =>
  `${x.toFixed(2)},${(y + offset).toFixed(2)}`;
const polygon = (points: number[][], offset = 0) =>
  `M${points.map((p) => point(p, offset)).join("L")}Z`;

const tiles: number[][][] = [];
const edges: { start: number[]; end: number[]; visible: boolean }[] = [];
for (const glyph of GLYPHS) {
  glyph.rows.forEach((row, y) => {
    [...row].forEach((cell, x) => {
      if (cell !== "1") return;
      const corners = [
        project(glyph.offset + x * CELL, y * CELL),
        project(glyph.offset + (x + 1) * CELL, y * CELL),
        project(glyph.offset + (x + 1) * CELL, (y + 1) * CELL),
        project(glyph.offset + x * CELL, (y + 1) * CELL),
      ];
      tiles.push(corners);
      const neighbors = [
        [x, y - 1],
        [x + 1, y],
        [x, y + 1],
        [x - 1, y],
      ];
      neighbors.forEach(([nx, ny], index) => {
        if (glyph.rows[ny]?.[nx] === "1") return;
        edges.push({
          start: corners[index],
          end: corners[(index + 1) % 4],
          visible: index >= 2,
        });
      });
    });
  });
}

const faces = (pressed: number) =>
  edges
    .filter((edge) => edge.visible)
    .map(
      ({ start, end }) =>
        `M${point(start, pressed)}L${point(end, pressed)}L${point(end, DEPTH)}L${point(start, DEPTH)}Z`
    )
    .join("");
const outline = edges
  .map(({ start, end }) => `M${point(start)}L${point(end)}`)
  .join("");
const top = tiles.map((tile) => polygon(tile)).join("");

export function MyMarkIsometric() {
  const id = useId().replace(/:/g, "");
  const ref = useRef<HTMLButtonElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const reduceMotion = useReducedMotion();
  const isInView = useInView(ref, { margin: "80px" });
  const mouseX = useMotionValue(412);
  const mouseY = useMotionValue(250);
  const cx = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const cy = useSpring(mouseY, { stiffness: 300, damping: 30 });
  const transition = reduceMotion
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 200, damping: 18, mass: 0.5 };

  useEffect(() => {
    const audio = new Audio("/sounds/metal-click.mp3");
    audio.preload = "auto";
    audioRef.current = audio;
    return () => {
      audio.pause();
      audio.removeAttribute("src");
      audio.load();
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (
      reduceMotion ||
      !isInView ||
      !window.matchMedia("(hover: hover) and (pointer: fine)").matches
    )
      return;
    const followCursor = (event: MouseEvent) => {
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return;
      mouseX.set(
        Math.max(
          0,
          Math.min(824, ((event.clientX - rect.left) / rect.width) * 824)
        )
      );
      mouseY.set(
        Math.max(
          0,
          Math.min(500, ((event.clientY - rect.top) / rect.height) * 500)
        )
      );
    };
    window.addEventListener("mousemove", followCursor, { passive: true });
    return () => window.removeEventListener("mousemove", followCursor);
  }, [isInView, reduceMotion, mouseX, mouseY]);

  function play() {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = 0;
    void audio.play().catch(() => {
      // Browser audio support and playback permissions vary.
    });
  }

  return (
    <motion.button
      ref={ref}
      id="js-cover-mark"
      type="button"
      aria-label="Play a metallic click with the MY mark"
      aria-describedby="cover-interaction-hint"
      className="relative block w-[88%] max-w-[560px] cursor-pointer touch-manipulation rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring sm:mr-6 sm:ml-auto sm:w-[78%]"
      initial="normal"
      whileTap="pressed"
      onClick={play}
    >
      <svg
        viewBox="0 0 824 500"
        fill="none"
        className="h-auto w-full overflow-visible [--mark-pattern:color-mix(in_oklab,var(--foreground)_10%,var(--background))] [--mark-stroke:color-mix(in_oklab,var(--foreground)_22%,var(--background))]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id={`${id}-hatch`}
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M-1 1L1 -1M0 10L10 0M9 11L11 9"
              stroke="var(--mark-pattern)"
            />
          </pattern>
          <motion.radialGradient
            id={`${id}-light`}
            cx={cx}
            cy={cy}
            r="240"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="var(--foreground)" stopOpacity="0.9" />
            <stop offset="1" stopColor="var(--foreground)" stopOpacity="0" />
          </motion.radialGradient>
        </defs>
        <g stroke="var(--color-edge)" strokeDasharray="5 4" strokeWidth="1">
          <path d="M-500 720L1300 -320M-500 -150L1300 890M-500 -340L1300 700" />
        </g>
        <motion.path
          fill="var(--background)"
          stroke="var(--mark-stroke)"
          variants={{ normal: { d: faces(0) }, pressed: { d: faces(14) } }}
          transition={transition}
        />
        <motion.g
          variants={{ normal: { y: 0 }, pressed: { y: 14 } }}
          transition={transition}
        >
          <path d={top} fill="var(--background)" />
          <path d={top} fill={`url(#${id}-hatch)`} />
          <path d={outline} stroke="var(--mark-stroke)" />
          <path d={outline} stroke={`url(#${id}-light)`} />
        </motion.g>
      </svg>
    </motion.button>
  );
}
