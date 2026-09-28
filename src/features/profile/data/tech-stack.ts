import type { TechStack } from "../types/tech-stack";

// One continuous grid, ordered by area of work.
export const TECH_STACK: TechStack[] = [
  // Programming languages
  {
    title: "C++",
    href: "https://isocpp.org/",
    icon: "/tech-icons/github-profile/cplusplus.svg",
  },
  {
    title: "C",
    href: "https://www.c-language.org/",
    icon: "/tech-icons/github-profile/c.svg",
  },
  {
    title: "Rust",
    href: "https://www.rust-lang.org/",
    icon: "/tech-icons/github-profile/rust.svg",
  },
  {
    title: "Python",
    href: "https://www.python.org/",
    icon: "/tech-icons/github-profile/python.svg",
  },
  {
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    icon: "/tech-icons/github-profile/javascript.svg",
  },
  {
    title: "TypeScript",
    href: "https://www.typescriptlang.org/",
    icon: "/tech-icons/github-profile/typescript.svg",
  },
  {
    title: "Bash",
    href: "https://www.gnu.org/software/bash/",
    icon: "/tech-icons/github-profile/bash.svg",
  },

  // Frontend
  {
    title: "Next.js",
    href: "https://nextjs.org/",
    icon: "/tech-icons/github-profile/nextjs.svg",
  },
  {
    title: "React",
    href: "https://react.dev/",
    icon: "/tech-icons/github-profile/react.svg",
  },
  {
    title: "Redux",
    href: "https://redux.js.org/",
    icon: "/tech-icons/github-profile/redux.svg",
  },
  {
    title: "Zustand",
    href: "https://zustand.docs.pmnd.rs/",
    icon: "/tech-icons/github-profile/zustand.png",
  },
  {
    title: "Tailwind CSS",
    href: "https://tailwindcss.com/",
    icon: "/tech-icons/github-profile/tailwindcss.svg",
  },
  {
    title: "shadcn/ui",
    href: "https://ui.shadcn.com/",
    icon: "/tech-icons/github-profile/shadcnui.svg",
  },

  // Backend, APIs, authentication, and validation
  {
    title: "Node.js",
    href: "https://nodejs.org/",
    icon: "/tech-icons/github-profile/nodejs.svg",
  },
  {
    title: "Express",
    href: "https://expressjs.com/",
    icon: "/tech-icons/github-profile/express.svg",
  },
  {
    title: "NestJS",
    href: "https://nestjs.com/",
    icon: "/tech-icons/github-profile/nestjs.svg",
  },
  {
    title: "FastAPI",
    href: "https://fastapi.tiangolo.com/",
    icon: "/tech-icons/github-profile/fastapi.svg",
  },
  {
    title: "WebSockets",
    href: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API",
    icon: "/tech-icons/github-profile/websockets.svg",
  },
  {
    title: "Better Auth",
    href: "https://www.better-auth.com/",
    icon: "/tech-icons/github-profile/betterauth.svg",
  },
  {
    title: "Auth.js",
    href: "https://authjs.dev/",
    icon: "/tech-icons/github-profile/authjs.png",
  },
  {
    title: "JSON Web Tokens",
    href: "https://jwt.io/",
    icon: "/tech-icons/github-profile/jsonwebtokens.svg",
  },
  {
    title: "Zod",
    href: "https://zod.dev/",
    icon: "/tech-icons/github-profile/zod.svg",
  },

  // Databases, ORM, and ODM
  {
    title: "PostgreSQL",
    href: "https://www.postgresql.org/",
    icon: "/tech-icons/github-profile/postgresql.svg",
  },
  {
    title: "MongoDB",
    href: "https://www.mongodb.com/",
    icon: "/tech-icons/github-profile/mongodb.svg",
  },
  {
    title: "Redis",
    href: "https://redis.io/",
    icon: "/tech-icons/github-profile/redis.svg",
  },
  {
    title: "Drizzle ORM",
    href: "https://orm.drizzle.team/",
    icon: "/tech-icons/github-profile/drizzle.svg",
  },
  {
    title: "Prisma",
    href: "https://www.prisma.io/",
    icon: "/tech-icons/github-profile/prisma.svg",
  },
  {
    title: "Mongoose",
    href: "https://mongoosejs.com/",
    icon: "/tech-icons/github-profile/mongoose.svg",
  },

  // AI, automation, and agentic workflows
  {
    title: "LangChain",
    href: "https://www.langchain.com/",
    icon: "/tech-icons/github-profile/langchain.svg",
  },
  {
    title: "LangGraph",
    href: "https://www.langchain.com/langgraph",
    icon: "/tech-icons/github-profile/langgraph.svg",
  },
  {
    title: "n8n",
    href: "https://n8n.io/",
    icon: "/tech-icons/github-profile/n8n.svg",
  },
  {
    title: "Model Context Protocol (MCP)",
    href: "https://modelcontextprotocol.io/",
    icon: "/tech-icons/github-profile/modelcontextprotocol.svg",
  },
  {
    title: "Qdrant",
    href: "https://qdrant.tech/",
    icon: "/tech-icons/github-profile/qdrant.svg",
  },
  {
    title: "Cohere",
    href: "https://cohere.com/",
    icon: "/tech-icons/github-profile/cohere.png",
  },

  // Development and deployment tools
  {
    title: "Docker",
    href: "https://www.docker.com/",
    icon: "/tech-icons/github-profile/docker.svg",
  },
  {
    title: "Git",
    href: "https://git-scm.com/",
    icon: "/tech-icons/github-profile/git.svg",
  },
  {
    title: "GitHub",
    href: "https://github.com/",
    icon: "/tech-icons/github-black.svg",
    darkIcon: "/tech-icons/github-white.svg",
  },
  {
    title: "Vercel",
    href: "https://vercel.com/",
    icon: "/tech-icons/github-profile/vercel.svg",
  },
  {
    title: "Render",
    href: "https://render.com/",
    icon: "/tech-icons/github-profile/render.svg",
  },
  {
    title: "Playwright",
    href: "https://playwright.dev/",
    icon: "/tech-icons/github-profile/playwright.svg",
  },

  // Linux and offensive security tools
  {
    title: "Linux",
    href: "https://www.linux.org/",
    icon: "/tech-icons/github-profile/linux.svg",
  },
  {
    title: "Nmap",
    href: "https://nmap.org/",
    icon: "/tech-icons/github-profile/nmap.png",
  },
  {
    title: "Metasploit",
    href: "https://www.metasploit.com/",
    icon: "/tech-icons/github-profile/metasploit.png",
  },
  {
    title: "Wireshark",
    href: "https://www.wireshark.org/",
    icon: "/tech-icons/github-profile/wireshark.png",
  },
  {
    title: "Burp Suite",
    href: "https://portswigger.net/burp",
    icon: "/tech-icons/github-profile/burpsuite.svg",
  },
];
