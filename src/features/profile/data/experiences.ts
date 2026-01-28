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
        description: `A production-level multi-vendor food delivery and gift mart platform with comprehensive role-based access control and module management.

**Project Focus:**

- **Dashboard Architecture**: Built two distinct dashboards (Customer, Vendor) with dynamic UI rendering, conditional logic, and real-time data updates
- **Authentication & Security**: Implemented secure authentication using NextAuth.js with protected routes, session management, and credential handling
- **API Development**: Designed and integrated RESTful APIs handling orders, food management, and user operations with optimized data flow
- **Design Implementation**: Translated Figma designs into responsive, pixel-perfect UI components using Tailwind CSS
- **Email Integration**: Integrated Resend for transactional notifications including order confirmations and status updates
- **Database Optimization**: Optimized MongoDB queries using Mongoose lean queries and schema design patterns
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
