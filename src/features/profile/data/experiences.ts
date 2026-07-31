import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "Mozzine Technologies",
    companyName: "Mozzine Technologies",
    companyLogo: "https://mozzine.com/logos/logo.svg",
    positions: [
      {
        id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
        title: "Junior Frontend Developer",
        employmentPeriod: {
          start: "10.2025",
          end: "04.2026",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `Worked on-site as a Junior Frontend Developer, contributing to real-world web projects and collaborating with a cross-functional team.

**Key Contributions:**

- **UI Development**: Developed and maintained user interfaces with a focus on performance, responsiveness, and cross-browser compatibility
- **Responsive Design**: Implemented responsive web designs ensuring seamless experience across desktop, tablet, and mobile devices
- **Website Functionality**: Improved existing website functionality and resolved UI/UX bugs to enhance overall user experience
- **Backend Collaboration**: Worked closely with backend developers to integrate APIs and ensure smooth data flow across digital platforms
- **Professional Standards**: Consistently upheld high professional standards and maintained a cooperative attitude within the team
`,
        skills: [
          "Frontend Development",
          "Responsive Design",
          "HTML",
          "CSS",
          "JavaScript",
          "API Integration",
          "Cross-browser Compatibility",
          "UI/UX",
          "Teamwork",
          "Problem-solving",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: false,
  },
  {
    id: "Code Expert",
    companyName: "Code Expert",
    companyLogo:
      "/companies_logo/code-expert.png",
    positions: [
      {
        id: "20f8bfe5-b6a3-4b0d-ac2f-6fccd50d417e",
        title: "Full Stack Intern",
        employmentPeriod: {
          start: "07.2025",
          end: "09.2025",
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
        isExpanded: false,
      },
    ],
    isCurrentEmployer: false,
  },
  {
    id: "Hiba Logics",
    companyName: "Hiba Logics",
    companyLogo: "/companies_logo/hiba-logics.png",
    positions: [
      {
        id: "c9d8e7f6-a5b4-3c2d-1e0f-abcdef012345",
        title: "PHP Laravel Intern",
        employmentPeriod: {
          start: "05.2025",
          end: "06.2025",
        },
        employmentType: "Internship",
        icon: "code",
        description: `Kickstarted my professional journey as a PHP Laravel Intern, gaining hands-on experience in backend web development and MVC architecture.

**Learning & Contributions:**

- **Laravel Framework**: Learned and applied core Laravel concepts including routing, controllers, Eloquent ORM, and Blade templating
- **Backend Development**: Built and maintained server-side logic and database interactions for web applications
- **MVC Architecture**: Understood and implemented the Model-View-Controller pattern in real project scenarios
- **Database Management**: Worked with MySQL databases, writing queries and managing migrations using Laravel's schema builder
- **Team Collaboration**: Collaborated with senior developers, participated in code reviews, and followed industry best practices
`,
        skills: [
          "PHP",
          "Laravel",
          "MySQL",
          "Blade Templating",
          "Eloquent ORM",
          "MVC Architecture",
          "REST APIs",
          "Git",
          "Backend Development",
          "Problem-solving",
        ],
        isExpanded: false,
      },
    ],
    isCurrentEmployer: false,
  },
];
