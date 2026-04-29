import type { TechStack } from "../types/tech-stack";

export const TECH_STACK: TechStack[] = [
  // Languages
  {
    key: "typescript",
    title: "TypeScript",
    href: "https://www.typescriptlang.org/",
    categories: ["Language"],
  },
  {
    key: "js",
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    categories: ["Language"],
  },
  {
    title: "Python",
    href: "https://www.python.org/",
    categories: ["Language"],
  },

  // Runtime Environment
  {
    key: "nodejs",
    title: "Node.js",
    href: "https://nodejs.org/",
    categories: ["Runtime Environment"],
  },

  // Frontend Frameworks & Libraries
  {
    key: "react",
    title: "React",
    href: "https://react.dev/",
    categories: ["Library", "UI Library"],
  },
  {
    key: "nextjs2",
    title: "Next.js",
    href: "https://nextjs.org/",
    categories: ["Framework"],
    theme: true,
  },

  // Backend Frameworks
  {
    title: "Nest js",
    href: "https://nestjs.com/",
    categories: ["Framework"],
  },

  {
    title: "Express js",
    href: "https://expressjs.com/",
    categories: ["Framework"],
    theme: true,
  },
  {
    title: "Fastapi",
    href: "https://fastapi.tiangolo.com/",
    categories: ["Framework"],
    theme: false,
  },

  // Styling & UI Components
  {
    key: "tailwindcss",
    title: "Tailwind CSS",
    href: "https://tailwindcss.com/",
    categories: ["Framework"],
  },
  {
    key: "shadcn-ui",
    title: "shadcn/ui",
    href: "https://ui.shadcn.com/",
    categories: ["Library", "Component Library"],
    theme: true,
  },

  // State Management
  {
    key: "redux",
    title: "Redux",
    href: "https://redux.js.org/",
    categories: ["State Management"],
  },

  // Databases
  {
    title: "PostgreSQL",
    href: "https://www.postgresql.org/",
    categories: ["Database"],
  },
  {
    key: "mongodb",
    title: "MongoDB",
    href: "https://www.mongodb.com/",
    categories: ["Database"],
  },
  {
    title: "Qdrant",
    href: "https://qdrant.tech/",
    categories: ["Database", "Vector Database"],
  },

  // ORMs & ODMs
  {
    title: "Drizzle ORM",
    href: "https://orm.drizzle.team/",
    categories: ["ORM"],
  },
  {
    title: "Mongoose",
    href: "https://mongoosejs.com/",
    categories: ["Library", "ODM"],
  },

  // Validation & Schema
  {
    title: "Zod",
    href: "https://zod.dev/",
    categories: ["Library", "Validation"],
  },

  // Authentication
  {
    title: "Better Auth",
    href: "https://www.better-auth.com/",
    categories: ["Authentication"],
    theme: true,
  },

  // AI & LLM Frameworks
  {
    title: "LangChain",
    href: "https://www.langchain.com/",
    categories: ["AI", "Framework"],
    theme: true,
  },
  {
    title: "LangGraph",
    href: "https://langchain-ai.github.io/langgraph/",
    categories: ["AI", "Framework"],
    theme: true,
  },

  // Development Tools & Platforms
  {
    title: "GitHub",
    href: "https://github.com/",
    categories: ["Version Control", "Platform"],
    theme: true,
  },
];
