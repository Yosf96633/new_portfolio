import assert from "node:assert/strict";
import test from "node:test";

import { fuseRanks, PASSAGES, RETRIEVAL_EXAMPLES, retrieve } from "./retrieval";

test("fusion uses rank rather than incomparable similarity scores", () => {
  const lists = [
    [
      { id: "p1" as const, score: 0.01 },
      { id: "p2" as const, score: 0.99 },
    ],
    [
      { id: "p2" as const, score: 500 },
      { id: "p3" as const, score: 100 },
    ],
  ];
  const snapshot = JSON.stringify(lists);
  const results = fuseRanks(lists);
  assert.equal(results[0].id, "p2");
  assert.ok(Math.abs(results[0].score - (1 / 62 + 1 / 61)) < 1e-12);
  assert.equal(results.length, 3);
  assert.equal(JSON.stringify(lists), snapshot);
});

test("one retrieval list cannot give duplicate credit to a passage", () => {
  const results = fuseRanks([
    [
      { id: "p1", score: 1 },
      { id: "p1", score: 1 },
    ],
  ]);
  assert.deepEqual(results, [{ id: "p1", score: 1 / 61 }]);
  assert.deepEqual(fuseRanks([]), []);
});

test("reranking preserves candidate membership and source references", () => {
  for (const example of RETRIEVAL_EXAMPLES) {
    const hybrid = retrieve(example, "hybrid");
    const reranked = retrieve(
      { ...example, rerank: { ...example.rerank, p1: 999 } },
      "reranked"
    );
    assert.deepEqual(
      new Set(reranked.map((item) => item.id)),
      new Set(hybrid.map((item) => item.id))
    );
    for (const item of reranked)
      assert.ok(PASSAGES.some((passage) => passage.id === item.id));
    for (const mode of ["dense", "sparse"] as const)
      assert.deepEqual(retrieve(example, mode), example[mode]);
  }
});

test("the paraphrase example demonstrates a changed leading passage after reranking", () => {
  assert.equal(retrieve(RETRIEVAL_EXAMPLES[0], "hybrid")[0].id, "p5");
  assert.equal(retrieve(RETRIEVAL_EXAMPLES[0], "reranked")[0].id, "p4");
});
