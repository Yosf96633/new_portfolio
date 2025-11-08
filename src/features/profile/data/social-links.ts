import type { SocialLink } from "../types/social-links";
import { FileText } from "lucide-react";
export const SOCIAL_LINKS: SocialLink[] = [
  {
    icon: "https://assets.chanhdai.com/images/link-icons/linkedin.webp?t=1759581475",
    title: "LinkedIn",
    description: "Muhammad Yousaf",
    href: "https://www.linkedin.com/in/muhammad-yousaf-b357172b6",
  },
  {
    icon: "https://assets.chanhdai.com/images/link-icons/github.webp?t=1759581475",
    title: "GitHub",
    description: "Yosf96633",
    href: "https://github.com/Yosf96633",
  },
  {
    icon: "/cv/image.png",
    title: "Download CV",
    description: "Resume & Portfolio",
    href: "/cv/yousaf.pdf", // Update with your actual CV path
    download: true, // Add this flag
  },
];
