import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
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

- **Asynchronous Job Processing**: Architected queue-based system using BullMQ and Redis where sentiment analysis requests generate job IDs and are queued for processing by available workers, preventing server overload and ensuring optimal resource utilization
- **LangGraph Workflow Engine**: Built multi-stage AI workflow with parallel processing pipelines featuring sentiment classification, emotional analysis, content pattern detection, and actionable insights generation across 7 distinct stages
- **API Key Rotation & Load Balancing**: Implemented intelligent rotation across 8 Google Gemini API keys with automatic load distribution to optimize throughput and prevent rate limit bottlenecks
- **Real-time Progress Tracking**: Integrated WebSocket communication providing live progress updates through stages: queued → fetching comments → transcript retrieval → classification → parallel analysis → summarization → completion
- **Parallel Data Fetching**: Optimized data retrieval using Promise.allSettled for concurrent YouTube comments and transcript fetching with graceful fallback handling
- **Redis-Based Rate Limiting**: Applied feature-specific throttling with express-rate-limit and Redis store to ensure system stability under high concurrent load
- **Production Deployment**: Configured backend deployment on Render, implemented Resend for transactional email notifications, and optimized Next.js frontend with SEO enhancements on Vercel with custom domain integration
- **Worker Concurrency Control**: Configured BullMQ workers with concurrency of 3 and rate limiting (2 jobs per day) for optimal performance
- **Frontend Contributions**: Developed UI enhancements, implemented SEO optimization in Next.js, and improved overall user experience (20% frontend contribution)

**Technical Architecture:**

- Backend processes comments in batches using structured LLM outputs (Zod schemas)
- Parallel analysis branches for emotions, patterns, loved aspects, improvements, and viewer requests
- Automatic transcript availability detection with non-blocking error handling
- Job progress tracking with percentage-based updates and stage-specific messages`,
    isExpanded: false,
  },
  {
    id: "better-auth-starter",
    title: "Better Auth Starter",
    period: {
      start: "2026",
    },
    link: "https://ba-starter7.vercel.app/", // Add your deployment link here
    skills: [
      "Next.js",
      "TypeScript",
      "Better Auth",
      "Neon",
      "Drizzle ORM",
      "Resend",
      "Arcjet",
      "shadcn/ui",
      "Tailwind CSS",
      "Vercel",
    ],
    description: `A comprehensive authentication starter template built to master Better Auth implementation with Next.js, featuring modern authentication patterns and security best practices.

**Key Features:**

- **Multiple Authentication Methods**: Email/password, Google OAuth, GitHub OAuth, and Passkeys support
- **Two-Factor Authentication**: Enhanced security with 2FA implementation
- **Rate Limiting**: Arcjet integration for API rate limiting and bot protection
- **Session Management**: Secure session handling and user session tracking
- **Account Linking**: Link multiple authentication providers to a single account
- **Password Recovery**: Complete forgot password and reset password flow
- **Email Integration**: Resend API for transactional emails and verification
- **Admin Features**: Admin plugin for user management and authorization
- **Database**: Neon PostgreSQL with Drizzle ORM for type-safe database operations
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS
- **API Routes**: Custom Next.js API routes for authentication endpoints`,
    isExpanded: false,
  },
  {
    id: "movies-app",
    title: "Movie Information Web App",
    period: {
      start: "2025",
    },
    link: "https://movies-app-ros.vercel.app/",
    skills: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "MongoDB",
      "NextAuth.js",
      "Zustand",
      "Zod",
      "TMDB API",
      "Vercel",
    ],
    description: `A comprehensive movie information platform powered by TMDB API, featuring trending movies, TV shows, and upcoming releases.

**Key Features:**

- **TMDB API Integration**: Fetches trending movies, trending TV shows, upcoming movies, and airing TV shows
- **Authentication**: Credential and Google authentication via NextAuth.js
- **State Management**: Zustand for efficient state handling
- **Real-time Validation**: Zod validation with debounced username availability check during registration
- **Advanced Routing**: Parallel and intercepting routing patterns
- **Custom API Routes**: Built with Next.js API routes for backend functionality
- **Database**: MongoDB for data persistence
- **Fully Typed**: TypeScript for type safety throughout the application`,
    isExpanded: true,
  },
  {
    id: "cambot",
    title: "CamBot - Campus Query Chatbot",
    period: {
      start: "2024",
    },
    link: "https://cambot-fyp.vercel.app/",
    skills: [
      "Final Year Project",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "PostgreSQL",
      "pgvector",
      "OpenAI API",
      "RAG",
      "Streaming Output",
    ],
    description: `An intelligent chatbot designed to answer college-related queries using Retrieval Augmented Generation (RAG) technique.

**Technical Implementation:**

- **RAG Architecture**: Implemented Retrieval Augmented Generation for accurate context-aware responses
- **Vector Database**: PostgreSQL with pgvector extension for efficient similarity search
- **Embeddings**: OpenAI text-embedding-3-small model for generating high-quality embeddings
- **Streaming Response**: Real-time streaming output for better user experience
- **Modern UI**: Built with Next.js, Tailwind CSS, and shadcn/ui components
- **College-Specific**: Trained on campus information to provide accurate institutional queries`,
  },
];
