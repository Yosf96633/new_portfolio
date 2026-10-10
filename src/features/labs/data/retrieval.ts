export const PASSAGES = [
  {
    id: "p1",
    page: 1,
    clause: "1 · Services",
    text: "The provider will deliver a monthly maintenance service and supply a written activity report after each service period.",
  },
  {
    id: "p2",
    page: 1,
    clause: "4 · Payment",
    text: "Invoices are payable within 30 days of receipt. Overdue balances may accrue a late payment charge.",
  },
  {
    id: "p3",
    page: 2,
    clause: "12 · Confidentiality",
    text: "Both parties must protect confidential information. This obligation continues after the agreement ends.",
  },
  {
    id: "p4",
    page: 2,
    clause: "17 · Termination",
    text: "Either party may terminate this agreement by giving 30 days of written notice. A material breach permits termination if it remains unresolved 14 days after written notice.",
  },
  {
    id: "p5",
    page: 3,
    clause: "18 · Return of materials",
    text: "When the agreement ends, the provider must return the client's materials and delete retained copies within 10 days.",
  },
] as const;

export type PassageId = (typeof PASSAGES)[number]["id"];
export type RetrievalMode = "dense" | "sparse" | "hybrid" | "reranked";
export type RankedPassage = { id: PassageId; score: number };
export type RetrievalExample = {
  id: string;
  question: string;
  note: string;
  dense: RankedPassage[];
  sparse: RankedPassage[];
  rerank: Partial<Record<PassageId, number>>;
};

// Synthetic document and curated scores, not measurements from live models.
export const RETRIEVAL_EXAMPLES: RetrievalExample[] = [
  {
    id: "paraphrase",
    question: "How can either side end the agreement?",
    note: "The question paraphrases termination. Semantic retrieval brings clause 17 forward, while exact-term matches can favor passages that also mention the agreement ending.",
    dense: [
      { id: "p4", score: 0.91 },
      { id: "p5", score: 0.81 },
      { id: "p3", score: 0.72 },
    ],
    sparse: [
      { id: "p5", score: 0.85 },
      { id: "p3", score: 0.77 },
      { id: "p4", score: 0.68 },
    ],
    rerank: { p4: 0.96, p5: 0.65, p3: 0.44 },
  },
  {
    id: "clause",
    question: "What does clause 17 say about a material breach?",
    note: "The clause number and the phrase material breach make a precise match useful. Hybrid fusion keeps candidates from both retrieval paths before the example reranking pass.",
    dense: [
      { id: "p3", score: 0.85 },
      { id: "p4", score: 0.82 },
      { id: "p5", score: 0.63 },
    ],
    sparse: [
      { id: "p4", score: 0.97 },
      { id: "p2", score: 0.55 },
      { id: "p3", score: 0.41 },
    ],
    rerank: { p4: 0.98, p3: 0.31, p2: 0.2, p5: 0.12 },
  },
  {
    id: "payment",
    question: "When do I need to pay an invoice?",
    note: "Both retrieval paths agree on the payment passage. Adding a reranker does not need to change the leading result to be useful; the evidence matters more than a visibly different ordering.",
    dense: [
      { id: "p2", score: 0.94 },
      { id: "p1", score: 0.61 },
      { id: "p4", score: 0.48 },
    ],
    sparse: [
      { id: "p2", score: 0.96 },
      { id: "p4", score: 0.57 },
      { id: "p1", score: 0.46 },
    ],
    rerank: { p2: 0.99, p1: 0.36, p4: 0.17 },
  },
];

export function fuseRanks(lists: RankedPassage[][]): RankedPassage[] {
  const scores = new Map<PassageId, number>();
  for (const list of lists) {
    const seen = new Set<PassageId>();
    list.forEach(({ id }, index) => {
      if (seen.has(id)) return;
      seen.add(id);
      scores.set(id, (scores.get(id) ?? 0) + 1 / (60 + index + 1));
    });
  }
  return [...scores]
    .map(([id, score]) => ({ id, score }))
    .sort((a, b) => b.score - a.score || a.id.localeCompare(b.id));
}

export function retrieve(
  example: RetrievalExample,
  mode: RetrievalMode
): RankedPassage[] {
  if (mode === "dense" || mode === "sparse") return [...example[mode]];
  const hybrid = fuseRanks([example.dense, example.sparse]);
  if (mode === "hybrid") return hybrid;
  return hybrid
    .map(({ id }) => ({ id, score: example.rerank[id] ?? 0 }))
    .sort((a, b) => b.score - a.score || a.id.localeCompare(b.id));
}
