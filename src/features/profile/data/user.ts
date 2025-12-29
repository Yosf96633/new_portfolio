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
    "Full Stack Developer",
    "GenAI & LLM Integration",
    "Microservices & System Design",
  ],
  address: "Lahore, Punjab, Pakistan",
  phoneNumber: "KzkyIDMzNSA4NDg1NzMy", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  email: "eW91c2FmLmRldjE4QGdtYWlsLmNvbQ==", // base64 encoded
  jobTitle: "Full Stack Developer",
  about: `
Hey, I'm Muhammad Yousaf — a Full Stack Developer who loves turning complex problems into clean, scalable solutions.

I work primarily with the MERN stack and Next.js, building production-ready applications that balance performance with great user experience. Whether it's architecting REST APIs, optimizing database queries, or translating designs into pixel-perfect interfaces, I enjoy the entire process of bringing ideas to life.

Right now, I'm diving deep into AI development — exploring Agentic AI, LangChain, and LangGraph. I'm fascinated by the challenge of building systems that don't just execute commands but actually think and adapt. Combining my full-stack foundation with AI is where I see the real potential to create something impactful.

Beyond the code, I'm always learning. System design, new frameworks, better patterns — I believe there's always a smarter way to solve a problem, and I'm constantly looking for it.

If you're working on something interesting or just want to talk tech, feel free to reach out. I'm always up for good conversations and new opportunities.
`,
  avatar: "/image.png",
  ogImage:
    "https://assets.chanhdai.com/images/screenshot-og-image-light.png?t=1759581475",
  dateCreated: "2025-11-06", // YYYY-MM-DD
};
