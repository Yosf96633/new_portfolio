import type { User } from "@/features/profile/types/user";

export const USER: User = {
  firstName: "Muhammad",
  lastName: "Yousaf",
  displayName: "Yousaf",
  username: "yosf",
  gender: "male",
  pronouns: "he/him",
  bio: "Building full-stack AI tools and Unix systems with TypeScript, Python, and C++.",
  flipSentences: [
    "Building full-stack AI tools and Unix systems.",
    "Full-Stack Developer",
    "AI Agents & Document Search",
    "C++ Systems & Unix Tooling",
  ],
  address: "Lahore, Punjab, Pakistan",
  phoneNumber: "KzkyIDMzNSA4NDg1NzMy", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  email: "eW91c2FmLmRldjE4QGdtYWlsLmNvbQ==", // base64 encoded
  jobTitle: "Full Stack Developer",
  about: `
Hey, I'm Muhammad Yousaf — a full-stack developer building practical AI applications and exploring systems programming.

My recent projects include DocsAI, which answers questions about legal PDFs with cited passages; Vidly, which analyzes YouTube comments and transcripts; and AutoHunt, which helps review and automate job applications. I build their interfaces and APIs with Next.js, React, TypeScript, Node.js, and Python FastAPI, and use LangGraph to coordinate AI workflows. PostgreSQL, Redis, and Qdrant support the data, queues, and search behind them.

I also built myShell, a Unix-like command shell in C++20. Working through parsing, pipelines, signals, and job control has sharpened how I think about processes and the tools my applications run on.

I enjoy taking a project from a responsive interface to the backend and the underlying workflow. If you're building something interesting in AI, web development, or developer tooling, I'd love to hear about it.
`,
  avatar: "/image.png",
  ogImage:
    "https://assets.chanhdai.com/images/screenshot-og-image-light.png?t=1759581475",
  dateCreated: "2025-11-06", // YYYY-MM-DD
};
