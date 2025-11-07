import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "movies-app",
    title: "Movie Information Web App",
    period: {
      start: "2024",
    },
    link: "https://movies-app-two-rouge.vercel.app/",
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
    link: "https://cambot-rose.vercel.app/",
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
  {
    id: "client-portfolio",
    title: "Client Portfolio Website",
    period: {
      start: "2024",
    },
    link: "",
    skills: [
      "Client Project",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "EmailJS",
    ],
    description: `A modern, animated portfolio website built for a client with smooth interactions and email integration.

**Features:**

- **Smooth Animations**: Framer Motion for fluid page transitions and element animations
- **Contact Form**: EmailJS integration for seamless email communication
- **Responsive Design**: Mobile-first approach ensuring perfect display on all devices
- **Modern UI**: Clean and professional design with attention to detail`,
  },
  {
    id: "auranest",
    title: "AuraNest E-Commerce",
    period: {
      start: "2024",
    },
    link: "https://auranest.netlify.app/",
    skills: [
      "React",
      "React Router DOM",
      "Tailwind CSS",
      "Redux",
      "API Integration",
      "Responsive Design",
      "Netlify",
    ],
    description: `A fully functional e-commerce application built to enhance front-end skills, featuring Figma to React conversion and comprehensive API integration.

**Key Features:**

- **Figma to React**: Pixel-perfect conversion from design to code
- **State Management**: Redux for global state handling
- **API Integration**: DummyJSON API for e-commerce data
- **Routing**: React Router DOM for seamless navigation
- **Responsive**: Fully responsive design for all screen sizes
- **Data Handling**: Complete product browsing, filtering, and cart management`,
  },
  {
    id: "positivus",
    title: "Positivus Landing Page",
    period: {
      start: "2024",
    },
    link: "https://positivus7.netlify.app/",
    skills: [
      "React",
      "Tailwind CSS",
      "Figma to Code",
      "Responsive Design",
      "Netlify",
    ],
    description: `A responsive marketing agency landing page created from Figma designs.

**Project Focus:**

- **Design Implementation**: Accurate conversion of Figma designs to React components
- **Responsive Layout**: Mobile-first responsive design approach
- **Clean Code**: Well-structured and maintainable codebase
- **Modern Styling**: Tailwind CSS for utility-first styling`,
  },
  {
    id: "blogify",
    title: "Blogify - MERN Blog Platform",
    period: {
      start: "2024",
    },
    link: "https://blogify-mern7.netlify.app/",
    skills: [
      "MERN Stack",
      "React",
      "React Router DOM",
      "Ant Design",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Cloudinary",
      "Netlify",
    ],
    description: `A full-stack blogging platform built with MERN stack to enhance full-stack development skills.

**Technical Stack:**

- **Frontend**: React with React Router DOM and Ant Design components
- **Backend**: Node.js and Express.js for RESTful API
- **Database**: MongoDB for data persistence
- **File Storage**: Cloudinary for image uploads and management
- **Features**: Complete CRUD operations for blog posts, user authentication, and rich text editing`,
  },
  {
    id: "democrasys",
    title: "Democrasys - Voting System",
    period: {
      start: "2024",
    },
    link: "https://votingapp98.netlify.app/",
    skills: [
      "University Project",
      "React",
      "React Router DOM",
      "Tailwind CSS",
      "Redux Toolkit",
      "Chart.js",
      "Responsive Design",
    ],
    description: `A semester project featuring a comprehensive voting system front-end with data visualization.

**Key Features:**

- **State Management**: Redux Toolkit for managing voting state
- **Data Visualization**: Chart.js for displaying voting results and analytics
- **Routing**: React Router DOM for multi-page navigation
- **Responsive UI**: Fully responsive design with Tailwind CSS
- **Vote Management**: Complete voting workflow from registration to results display`,
  },
];
