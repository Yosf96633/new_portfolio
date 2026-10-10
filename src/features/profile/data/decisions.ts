export type EngineeringDecision = {
  id: string;
  project: string;
  title: string;
  summary: string;
  tags: string[];
  constraint: string;
  alternatives: { title: string; consequence: string }[];
  choice: string;
  tradeoff: string;
  revisit: string;
  projectHref: string;
  walkthroughHref?: string;
};

// Architecture summaries drawn from the portfolio's project descriptions.
// Alternatives describe possible approaches, not a claimed evaluation history.
export const DECISIONS: EngineeringDecision[] = [
  {
    id: "docsai-retrieval",
    project: "DocsAI",
    title: "Combine meaning with exact terminology",
    summary:
      "Dense and sparse retrieval serve different parts of a legal question.",
    tags: ["Retrieval", "Qdrant", "Reranking"],
    constraint:
      "A question about a legal PDF may paraphrase an obligation while also naming a precise clause or legal term. The retrieval layer needs to surface useful passages for both kinds of query before the answer can cite them.",
    alternatives: [
      {
        title: "Dense retrieval alone",
        consequence:
          "Captures semantic similarity, but similarity does not always preserve the importance of a specific term or clause identifier.",
      },
      {
        title: "Sparse retrieval alone",
        consequence:
          "Emphasizes term matches, but can miss a relevant passage when the question expresses the same idea in different words.",
      },
    ],
    choice:
      "DocsAI stores OpenAI dense embeddings and SPLADE sparse vectors in Qdrant and combines the retrieval paths. A Cohere reranking step then orders the candidate passages before they inform the generated answer.",
    tradeoff:
      "Two representations add ingestion work and storage. Reranking introduces another service call, with additional latency and cost. The extra stages also mean more configuration to inspect when an irrelevant passage reaches the answer.",
    revisit:
      "Compare dense-only, sparse-only, and hybrid retrieval on the same representative questions. Check passage relevance and citation support alongside latency and cost before deciding whether every query needs the full pipeline.",
    projectHref: "https://github.com/Yosf96633/DocsAI.git",
  },
  {
    id: "vidly-job-queue",
    project: "Vidly",
    title: "Give analysis its own job lifecycle",
    summary:
      "A request starts the work; workers carry it through the analysis stages.",
    tags: ["BullMQ", "Redis", "WebSockets"],
    constraint:
      "Analyzing a video involves fetching comments and a transcript, running multiple AI analysis stages, and assembling a result. The duration depends on external services and the amount of content, while multiple users can request work at once.",
    alternatives: [
      {
        title: "Finish inside the HTTP request",
        consequence:
          "Keeps the request-response flow simple, but leaves the connection waiting through the entire workflow and exposes it to request timeouts.",
      },
      {
        title: "Start an untracked background task",
        consequence:
          "Returns quickly, but makes job ownership, concurrency limits, and progress tracking harder to coordinate across application processes.",
      },
    ],
    choice:
      "Vidly creates a job ID and queues the analysis with BullMQ and Redis. Workers process the workflow with configured concurrency and rate limits, while Socket.io delivers stage and progress updates to the interface.",
    tradeoff:
      "The system now needs Redis and worker processes alongside the API. The interface must handle queued, running, completed, and failed states; progress updates and the final result need to stay associated with the correct job.",
    revisit:
      "Measure queue wait time separately from processing time. If jobs pile up, identify whether the bottleneck is worker capacity or an external provider's rate limit before increasing concurrency.",
    projectHref: "https://getvidly.com/",
  },
  {
    id: "myshell-process-groups",
    project: "myShell",
    title: "Treat a pipeline as one foreground job",
    summary: "Several processes share one terminal interaction.",
    tags: ["POSIX", "Signals", "Job control"],
    constraint:
      "In a pipeline such as cat file.txt | sort, each stage is a separate process. From the user's perspective it is one job: Ctrl+C should interrupt the foreground pipeline, and a stopped job should remain manageable through fg and bg.",
    alternatives: [
      {
        title: "Manage each child independently",
        consequence:
          "Tracks individual processes, but leaves the shell coordinating terminal signals and job state across every stage itself.",
      },
      {
        title: "Keep the shell in the foreground",
        consequence:
          "Avoids terminal handoff, but terminal-generated signals reach the shell's foreground group instead of a dedicated group for the running job.",
      },
    ],
    choice:
      "myShell assigns pipeline children to a shared process group and hands the terminal to that group for foreground execution. Job control tracks the group, and terminal ownership returns to the shell when the foreground job completes or stops.",
    tradeoff:
      "Process creation, group assignment, signal handling, and terminal ownership must agree. Stopped jobs and background reaping add lifecycle states that a simple fork-and-wait loop does not cover.",
    revisit:
      "Exercise multi-stage pipelines in a pseudo-terminal: interrupt them, suspend them, resume them in the foreground and background, and verify that the shell regains terminal ownership and reaps completed children.",
    projectHref: "https://github.com/Yosf96633/myshell",
    walkthroughHref: "/builds/myshell",
  },
];
