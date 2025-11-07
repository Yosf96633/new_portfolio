import type { User } from "@/features/profile/types/user";

export const USER: User = {
  firstName: "Muhammad",
  lastName: "Yousad",
  displayName: "Yousaf",
  username: "yosf",
  gender: "male",
  pronouns: "he/him",
  bio: "Building the future, one microservice at a time.",
  flipSentences: [
    "Building the future, one microservice at a time.",
    "Full Stack Web Developer",
    "GenAI & LLM Integration",
    "Microservices & System Design",
  ],
  address: "Narowal, Punjab, Pakistan",
  phoneNumber: "KzkyIDMzNSA4NDg1NzMy", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  email: "eW91c2FmLmRldjE4QGdtYWlsLmNvbQ==", // base64 encoded
  jobTitle: "Full Stack Web Developer",
  jobs: [
    {
      title: "Full Stack Web Developer",
      company: "Code Expert",
      website: "https://www.codeexpertx.com/",
    },
  ],
  about: `
Hello, World! I am Muhammad Yousaf — a Full Stack Web Developer passionate about building intelligent, scalable applications that push the boundaries of modern web development.

Currently working at Code Expert, I specialize in creating robust web applications using the MERN stack, Next.js, TypeScript, and modern design systems like shadcn/ui and Tailwind CSS. I focus on delivering clean, maintainable code and exceptional user experiences.

I'm actively expanding my expertise into the AI domain, currently learning Agentic AI, LangChain, and LangGraph to build the next generation of intelligent applications. With a growing knowledge of system design principles, I'm working towards my goal of becoming a proficient Full Stack AI Developer.

My passion lies in creating autonomous systems that combine the power of AI with solid full-stack engineering — building applications that don't just respond to user input, but actively solve problems and adapt intelligently.

Let's connect and build the future of intelligent software together!
`,
  avatar: "/image.png",
  ogImage:
    "https://assets.chanhdai.com/images/screenshot-og-image-light.png?t=1759581475",
  dateCreated: "2025-11-06", // YYYY-MM-DD
};
