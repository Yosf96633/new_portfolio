import { About } from "@/features/profile/components/about";
import { LabLinks } from "@/features/labs/components/lab-links";
import { DecisionLog } from "@/features/profile/components/decision-log";
import { Experiences } from "@/features/profile/components/experiences";
import { Contact } from "@/features/profile/components/form";
import { GitHubContributions } from "@/features/profile/components/github-contributions";
import { InsideTheBuild } from "@/features/profile/components/inside-the-build";
import { Overview } from "@/features/profile/components/overview";
import { ProfileCover } from "@/features/profile/components/profile-cover";
import { ProfileHeader } from "@/features/profile/components/profile-header";
import { Projects } from "@/features/profile/components/projects";
import { SocialLinks } from "@/features/profile/components/social-links";
import { SectionSeparator as Separator } from "@/features/profile/components/section-separator";
import { TechStack } from "@/features/profile/components/tech-stack";
export default function Page() {
  return (
    <div className="mx-auto md:max-w-3xl">
      <ProfileCover />
      <ProfileHeader />
      <Separator />
      <Overview />
      <Separator />
      <SocialLinks />
      <Separator />

      <About />
      <Separator />

      <GitHubContributions />
      <Separator />

      <TechStack />
      <Separator />

      <Experiences />
      <Separator />

      <Projects />
      <Separator />
      <InsideTheBuild />
      <Separator />
      <DecisionLog />
      <Separator />
      <LabLinks />
      <Separator />
      <Contact />
      <Separator />
    </div>
  );
}
