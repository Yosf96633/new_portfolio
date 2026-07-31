import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "docsai",
    title: "DocsAI - Legal Document Analysis Assistant",
    period: {
      start: "2026",
    },
    link: "https://github.com/Yosf96633/DocsAI.git",
    skills: [
      "Python FastAPI",
      "Next.js 16",
      "React 19",
      "LangGraph",
      "Qdrant Vector Database",
      "PostgreSQL",
      "Tailwind CSS v4",
      "Groq Llama 3.3",
      "OpenAI Dense Embeddings",
      "SPLADE Sparse Embeddings",
      "Cohere Reranker",
    ],
    description: `An intelligent tool designed to help people understand complex legal documents without needing a law degree. Instead of reading through hundreds of pages of contracts or compliance forms users can simply upload a PDF and ask questions in plain English. The system reads the document instantly and provides accurate answers with specific references to where the information was found. It acts like a smart research assistant that ensures every answer is grounded in the actual text of the file rather than making things up. This makes reviewing legal paperwork faster and much less intimidating for anyone who needs to verify contract details or obligations.

**Key Technical Achievements:**

- **Legal Document Validation Pipeline**: Built an AI-powered pre-check system using GPT-4o-mini that analyzes uploaded PDFs to confirm they contain legal or compliance content before processing begins preventing wasted resources on irrelevant files
- **Hybrid Search Retrieval**: Implemented dual-vector search combining dense embeddings from OpenAI and sparse SPLADE vectors in Qdrant to capture both semantic meaning and exact keyword matches in legal terminology
- **Cohere Reranking Integration**: Added a reranking step after initial retrieval to sort results by true relevance ensuring only the most pertinent document sections inform the final answer
- **Streaming Response Architecture**: Developed server-sent events endpoint that delivers AI-generated tokens and citation sources in real time creating a responsive chat experience without page reloads
- **Multi-Provider LLM Orchestration**: Integrated Groq Llama 3.3 for generation OpenAI for embeddings and Cohere for reranking within a single LangGraph workflow optimizing cost and performance across different task types
- **Position-Aware Chunking**: Created custom PDF parsing logic that estimates vertical position of each text chunk enabling precise citation highlighting in the frontend document viewer
- **Thread-Isolated Context Management**: Designed PostgreSQL-backed thread system ensuring chat history and document context remain completely separate per conversation maintaining privacy and accuracy

**Technical Architecture:**

- Backend: Python FastAPI with LangGraph state machine orchestration
- Frontend: Next.js 16 App Router plus React 19 plus Tailwind CSS v4 plus Radix UI components
- AI Stack: Groq Llama 3.3 for generation plus OpenAI text-embedding-3-small for vectorization plus Cohere Reranker for result refinement
- Storage: Qdrant hybrid vector database plus PostgreSQL for metadata and thread management plus Cloudinary for PDF storage
- Workflow: Two independent LangGraph pipelines handling document ingestion and chat generation separately`,
    isExpanded: true,
  },
  {
    id: "vidly",
    title: "Vidly - YouTube Comment Sentiment Analysis Platform",
    period: {
      start: "2025",
    },
    link: "https://getvidly.com/",
    skills: [
      "Node.js",
      "Express.js",
      "TypeScript",
      "LangChain",
      "LangGraph",
      "BullMQ",
      "Redis",
      "Socket.io",
      "Next.js",
      "Resend",
      "Render",
      "Vercel",
    ],
    description: `An AI-powered sentiment analysis platform that processes YouTube video comments and transcripts to generate actionable insights. Co-developed with 80% backend contribution.

**Key Technical Achievements:**

- **Asynchronous Job Processing**: Architected queue-based system using BullMQ and Redis where sentiment analysis requests generate job IDs and are queued for processing by available workers preventing server overload and ensuring optimal resource utilization
- **LangGraph Workflow Engine**: Built multi-stage AI workflow with parallel processing pipelines featuring sentiment classification emotional analysis content pattern detection and actionable insights generation across 7 distinct stages
- **API Key Rotation & Load Balancing**: Implemented intelligent rotation across 8 Google Gemini API keys with automatic load distribution to optimize throughput and prevent rate limit bottlenecks
- **Real-time Progress Tracking**: Integrated WebSocket communication providing live progress updates through stages including queued fetching comments transcript retrieval classification parallel analysis summarization and completion
- **Parallel Data Fetching**: Optimized data retrieval using Promise.allSettled for concurrent YouTube comments and transcript fetching with graceful fallback handling
- **Redis-Based Rate Limiting**: Applied feature-specific throttling with express-rate-limit and Redis store to ensure system stability under high concurrent load
- **Production Deployment**: Configured backend deployment on Render implemented Resend for transactional email notifications and optimized Next.js frontend with SEO enhancements on Vercel with custom domain integration
- **Worker Concurrency Control**: Configured BullMQ workers with concurrency of 3 and rate limiting for optimal performance
- **Frontend Contributions**: Developed UI enhancements implemented SEO optimization in Next.js and improved overall user experience with 20% frontend contribution

**Technical Architecture:**

- Backend processes comments in batches using structured LLM outputs via Zod schemas
- Parallel analysis branches for emotions patterns loved aspects improvements and viewer requests
- Automatic transcript availability detection with non-blocking error handling
- Job progress tracking with percentage-based updates and stage-specific messages`,
    isExpanded: false,
  },
  {
    id: "autohunt",
    title: "AutoHunt - Autonomous AI Job Application Agent",
    period: {
      start: "2026",
    },
    link: "https://github.com/Yosf96633/Autohunt.git",
    skills: [
      "LangGraph",
      "Playwright",
      "Next.js",
      "React 19",
      "TypeScript",
      "Node.js",
      "OpenAI API",
      "Groq",
      "PostgreSQL",
      "Tailwind CSS v4",
      "shadcn/ui",
      "Zod",
    ],
    description: `A fully autonomous AI agent that automates the entire job application lifecycle. AutoHunt parses resumes scrapes multiple job boards evaluates role compatibility using LLMs generates tailored cover letters and submits applications via browser automation with a human-in-the-loop approval system.

**Key Technical Achievements:**

- **Stateful LangGraph Workflow**: Orchestrated a complex 10-node state machine handling CV parsing job scraping relevance scoring filtering cover letter generation self-critique refinement human interruption browser automation tracking and email digest composition
- **Browser Automation Pipeline**: Built robust Playwright scripts that navigate job portals dynamically locate form fields and auto-fill applications based on structured resume data extraction
- **Multi-LLM Evaluation System**: Integrated OpenAI and Groq Llama 3.3 for dual-purpose evaluation including semantic job-CV matching with percentage scoring and iterative cover letter generation with critic-refiner loop for quality assurance
- **Document Intelligence**: Implemented pdfjs-dist based PDF parsing pipeline that extracts structured professional data from uploaded resumes including skills experience education and contact information
- **Human-in-the-Loop Architecture**: Designed graph interruption mechanism allowing users to review scored jobs and generated cover letters before automated submission combining AI efficiency with human judgment
- **Modern Full-Stack Dashboard**: Built real-time monitoring interface with Next.js 16 App Router React 19 Tailwind CSS v4 and shadcn/ui featuring live agent status job board browsing visualization skill matching analytics and application statistics
- **Type-Safe Validation**: Enforced strict schema validation throughout the workflow using Zod for CV data job listings LLM outputs and application forms ensuring data integrity across all pipeline stages
- **Database Integration**: Configured PostgreSQL with LangGraph checkpointing for workflow state persistence and SQLite for local job tracking with comprehensive application history logging

**Technical Architecture:**

- Backend: Node.js plus Express plus TypeScript with LangGraph state management
- Frontend: Next.js 16 App Router plus React 19 plus Tailwind CSS v4 plus shadcn/ui plus Framer Motion
- AI/ML: OpenAI API plus Groq Llama 3.3 plus pdfjs-dist plus semantic scoring algorithms
- Automation: Playwright for cross-platform browser automation with anti-detection measures
- Database: PostgreSQL for LangGraph checkpoints plus SQLite for job tracking`,
    isExpanded: false,
  },
];