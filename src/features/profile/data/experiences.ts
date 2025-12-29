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
        title: "Full Stack Developer",
        employmentPeriod: {
          start: "07.2025",
          end: "12.2025",
        },

        employmentType: "Full-time",
        icon: "code",
        description: `- Developed production-level **multi-vendor food delivery and gift mart platform** with comprehensive role-based access control and module management.
- Built and maintained **two distinct dashboards** (Customer, Vendor) with dynamic UI rendering, conditional logic, and real-time data updates.
- Implemented **secure authentication and authorization** using NextAuth.js with protected routes, session management, and credential handling.
- Designed and integrated **RESTful APIs** handling orders, food management, and user operations across multiple modules with shared schemas and optimized data flow.
- Translated **Figma designs into responsive, pixel-perfect UI components** using Tailwind CSS and modern design systems.
- Integrated **Resend for transactional email notifications** including order confirmations, status updates, and vendor alerts.
- Optimized **MongoDB queries** using Mongoose lean queries and schema design patterns for improved database performance.
- Ensured **SEO optimization** and adherence to modern web standards for better search engine visibility.
`,
        skills: [
          "Next.js",
          "Express.js",
          "Tailwind CSS",
          "Next Auth",
          "MongoDB",
          "ShadCN UI",
          "Node.js",
          "Resend",
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
    isCurrentEmployer: false,
  },
];
