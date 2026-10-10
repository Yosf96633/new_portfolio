import assert from "node:assert/strict";
import test from "node:test";

import { describePipeline } from "./shell";

test("a three-stage pipeline wires the middle child to two different pipes", () => {
  const { pipes, processes } = describePipeline([
    ["cat", "file.txt"],
    ["sort"],
    ["head", "-n", "2"],
  ]);
  assert.equal(pipes.length, 2);
  assert.equal(processes[0].stdin, "terminal");
  assert.equal(processes[0].stdout, "pipe 1 · write fd 4");
  assert.equal(processes[1].stdin, "pipe 1 · read fd 3");
  assert.equal(processes[1].stdout, "pipe 2 · write fd 6");
  assert.equal(processes[2].stdin, "pipe 2 · read fd 5");
  assert.equal(processes[2].stdout, "terminal");
  assert.equal(new Set(processes.map((process) => process.group)).size, 1);
  assert.equal(new Set(processes.map((process) => process.pid)).size, 3);
  assert.equal(
    new Set(pipes.flatMap((pipe) => [pipe.read, pipe.write])).size,
    4
  );
});

test("single commands need no pipe and empty input creates no processes", () => {
  const { pipes, processes } = describePipeline([["pwd"]]);
  assert.equal(pipes.length, 0);
  assert.equal(processes[0].stdin, "terminal");
  assert.equal(processes[0].stdout, "terminal");
  assert.deepEqual(describePipeline([]), { pipes: [], processes: [] });
});
