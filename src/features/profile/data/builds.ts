export type BuildStage = {
  title: string;
  summary: string;
  input: string;
  output: string;
  explanation: string;
  decision: string;
  code: string;
};

export const MYSHELL_BUILD = {
  command: "cat file.txt | sort",
  source: "https://github.com/Yosf96633/myshell",
  stages: [
    {
      title: "Parse the command",
      summary: "Turn text into two commands and one pipeline.",
      input: "cat file.txt | sort",
      output: '[ ["cat", "file.txt"], ["sort"] ]',
      explanation:
        "The parser separates the unquoted pipe operator from command arguments. That distinction matters: a pipe inside quotes belongs to an argument, rather than starting another process. Parsing completes before execution begins.",
      decision:
        "Keep syntax handling separate from execution so malformed input can be rejected before any child processes start.",
      code: 'parse_pipeline(line)\n  → command(argv: ["cat", "file.txt"])\n  → command(argv: ["sort"])',
    },
    {
      title: "Create the connection",
      summary: "Give the producer and consumer a shared byte stream.",
      input: "Two commands that need to exchange data",
      output: "One pipe: a read end and a write end",
      explanation:
        "A pipe provides two file descriptors. The first command will write into it; the second will read from it. This connects the programs without an intermediate file.",
      decision:
        "Start every pipeline stage before waiting. Waiting for the producer first can deadlock when the pipe fills and no consumer is running.",
      code: "read_end, write_end = pipe()\n// Start both stages before waiting for either.",
    },
    {
      title: "Start and wire the processes",
      summary: "Connect cat’s output to sort’s input.",
      input: "Command arguments + pipe descriptors",
      output: "Two child processes connected through stdin/stdout",
      explanation:
        "Each external command runs in its own child process. The cat child duplicates the pipe’s write end onto standard output; the sort child duplicates its read end onto standard input. Each child then closes the original pipe descriptors it no longer needs.",
      decision:
        "File descriptor ownership is part of correctness. A leftover write end can keep sort waiting for end-of-file even after cat has finished.",
      code: "cat child:\n  dup2(write_end, STDOUT_FILENO)\n  close(original pipe descriptors)\n\nsort child:\n  dup2(read_end, STDIN_FILENO)\n  close(original pipe descriptors)",
    },
    {
      title: "Hand over the terminal",
      summary: "Treat the foreground pipeline as a single job.",
      input: "Two children launched from an interactive shell",
      output: "A shared process group owning the foreground terminal",
      explanation:
        "The children belong to a shared process group. For an interactive foreground job, terminal ownership moves to that group. Terminal-generated signals such as Ctrl+C then reach the foreground job while the shell remains available to manage it.",
      decision:
        "Manage a pipeline as one job so foreground control and signals apply to all of its stages together.",
      code: "assign children to pipeline process group\ntcsetpgrp(terminal, pipeline_group)\n// The foreground job now receives terminal signals.",
    },
    {
      title: "Execute and stream",
      summary: "Replace the children with the requested programs.",
      input: "Wired children + resolved executable paths",
      output: "Sorted file contents written to the terminal",
      explanation:
        "Executable lookup resolves the commands through PATH. The children replace their program images with cat and sort, keeping the wired descriptors. The parent closes its copies of the pipe ends. cat writes the file into the pipe; sort consumes the stream and emits its sorted output after reaching end-of-file.",
      decision:
        "Let ordinary Unix programs do their work. The shell coordinates arguments, processes, and descriptors rather than implementing cat or sort itself.",
      code: 'cat child:  exec(resolved_cat, ["cat", "file.txt"])\nsort child: exec(resolved_sort, ["sort"])\nparent:     close(both pipe ends)',
    },
    {
      title: "Clean up and return",
      summary: "Collect the job’s status and bring back the prompt.",
      input: "Foreground job finishes or stops",
      output: "Terminal restored to the shell; job status recorded",
      explanation:
        "The shell tracks its foreground children until the job completes or stops. Completed children are reaped so they do not remain as zombies; a stopped job stays tracked for job control. Terminal ownership returns to the shell, and a completed pipeline uses its final stage’s exit status.",
      decision:
        "A working command is only half the job. Correct cleanup keeps the next prompt, the next command, and later foreground/background operations reliable.",
      code: "wait for foreground job state changes\nrecord completion or stopped state\ntcsetpgrp(terminal, shell_group)\nif completed: pipeline_status = final_stage_status\nshow_prompt()",
    },
  ],
};

export const DOCSAI_BUILD = {
  source: "https://github.com/Yosf96633/DocsAI",
  question: "What are the conditions for terminating this agreement?",
  stages: [
    {
      title: "Validate the document",
      summary: "Check that the uploaded PDF belongs in the legal workflow.",
      input: "An uploaded PDF",
      output: "Legal or compliance content accepted for processing",
      explanation:
        "DocsAI runs an AI-assisted pre-check with GPT-4o-mini to determine whether the PDF contains legal or compliance content. This is the entry point to document ingestion, before the search index is built.",
      decision:
        "Validate the document before spending resources on embeddings and indexing. This check classifies content; it does not certify a document's legal validity.",
      code: "document = receive_pdf(upload)\nclassification = classify_content(document)\nif legal_or_compliance(classification):\n  continue_ingestion(document)\nelse:\n  reject_document()",
    },
    {
      title: "Extract text and preserve its location",
      summary: "Create searchable chunks that can lead back to the PDF.",
      input: "Accepted PDF pages",
      output: "Text chunks with page and estimated position metadata",
      explanation:
        "The PDF parser extracts text into chunks and estimates their vertical position on the page. That location metadata travels with the text so a retrieved passage can later be highlighted in the document viewer.",
      decision:
        "A citation needs a route back to the original page, not just a copied sentence. Estimated positions also mean highlighting accuracy depends on the document layout and extraction quality.",
      code: "for page in document:\n  text = extract_text(page)\n  for chunk in split_text(text):\n    preserve(chunk, page_number, estimated_position)",
    },
    {
      title: "Build both search representations",
      summary: "Index meaning and terminology in the same retrieval system.",
      input: "Text chunks and their source metadata",
      output: "Dense and sparse vectors stored in Qdrant",
      explanation:
        "Each chunk receives an OpenAI dense embedding and a SPLADE sparse representation. Qdrant stores the search vectors alongside the passage metadata. PostgreSQL holds application metadata, while Cloudinary stores the PDF.",
      decision:
        "Dense vectors capture semantic similarity; sparse vectors emphasize terms. Retaining the source metadata connects either retrieval path to the same original passage.",
      code: "for chunk in chunks:\n  dense = openai_embedding(chunk.text)\n  sparse = splade_representation(chunk.text)\n  qdrant.store(dense, sparse, chunk.source_metadata)",
    },
    {
      title: "Scope the question to its conversation",
      summary:
        "Keep the document and chat history attached to the right thread.",
      input: "A question in a document conversation",
      output: "Question, document context, and thread-specific history",
      explanation:
        "Document ingestion and chat generation use separate LangGraph workflows. When a question arrives, the PostgreSQL-backed thread system supplies its conversation history and document context rather than sharing a global chat history.",
      decision:
        "An answer must use the intended document. Thread isolation keeps one conversation's context from becoming another conversation's evidence.",
      code: "thread = load_conversation(thread_id)\ncontext = {\n  question,\n  document: thread.document,\n  history: thread.messages\n}\nstart_chat_workflow(context)",
    },
    {
      title: "Retrieve candidate passages",
      summary: "Search for semantic matches and relevant legal terms.",
      input: "Question + current document context",
      output: "Candidate passages from hybrid retrieval",
      explanation:
        "The question is searched through the dense and sparse retrieval paths in Qdrant. Hybrid retrieval combines their candidates so the answer can draw from passages that match the question's meaning as well as its terminology.",
      decision:
        "Retrieval narrows a long document into potential evidence. A search match is still only a candidate; it needs relevance checking before generation.",
      code: "dense_query = openai_embedding(question)\nsparse_query = splade_representation(question)\ncandidates = hybrid_search(\n  dense_query, sparse_query, current_document\n)",
    },
    {
      title: "Rerank the evidence",
      summary: "Order candidates by their relevance to the actual question.",
      input: "Question + retrieved candidate passages",
      output: "Selected passages ordered by relevance",
      explanation:
        "Cohere reranks the retrieved passages before they enter the answer context. This adds a second relevance check after the initial search, helping the generation stage focus on the passages most useful for the question.",
      decision:
        "The extra service call costs time and money. Its purpose is to improve the evidence supplied to the model; it does not guarantee that the final answer is correct.",
      code: "ranked = cohere_rerank(question, candidates)\nevidence = select_relevant_passages(ranked)\nretain_source_metadata(evidence)",
    },
    {
      title: "Stream the answer and its citations",
      summary: "Return readable text with a path back to the evidence.",
      input: "Question, conversation history, and selected evidence",
      output: "Streamed answer tokens + citation sources in the PDF viewer",
      explanation:
        "Groq Llama 3.3 generates the answer using the selected document context. FastAPI delivers answer tokens and citation sources through server-sent events. The frontend uses source metadata to connect the response to highlighted passages in the PDF viewer.",
      decision:
        "Streaming lets the reader follow the answer as it arrives. Citations let them inspect its support in the PDF, rather than relying on the generated text alone.",
      code: "answer_stream = generate(question, history, evidence)\nfor token in answer_stream:\n  send_sse(token)\nsend_sse(citation_sources(evidence))\nviewer.link_sources_to_pdf()",
    },
  ] satisfies BuildStage[],
};
