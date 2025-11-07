import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "Code Expert",
    companyName: "Code Expert",
    companyLogo:
      "https://www.codeexpertx.com/_next/image?url=%2FLOGO.png&w=1080&q=75",
    positions: [
      {
        id: "20f8bfe5-b6a3-4b0d-ac2f-6fccd50d417e",
        title: "Full Stack Web Developer",
        employmentPeriod: {
          start: "07.2025",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Developed **PindEats**, a food gift mart delivery application with comprehensive features.
- Converted **Figma designs to Next.js** components with pixel-perfect implementation.
- Built **responsive front-end** interfaces ensuring seamless experience across all devices.
- Created **custom APIs** for food management and user management systems.
- Implemented **authentication system** using NextAuth.js with secure credential handling.
- Integrated **NodeMailer** for automated email notifications:
  - Order confirmations and updates for customers
  - Real-time order notifications for vendors
- Developed and integrated **APIs for vendor dashboard** with comprehensive data management.
- Optimized **SEO** for better search engine visibility and performance.
- Ensured UI/UX consistency and adherence to modern web standards.
- Analyzed technical requirements and provided optimal solutions for project challenges.`,
        skills: [
          "Next.js",
          "Express.js",
          "Tailwind CSS",
          "Next Auth",
          "MongoDB",
          "ShadCN UI",
          "Node.js",
          "Node Mailer",
          "Figma to Code",
          "Responsive Design",
          "API Development",
          "SEO",
          "Teamwork",
          "Research",
          "Problem-solving",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
];
