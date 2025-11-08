import { LucideIcon } from "lucide-react";

export type SocialLink = {
  icon: string | LucideIcon;
  title: string;
  description: string;
  href: string;
  download?: boolean; // Add this optional field
};
