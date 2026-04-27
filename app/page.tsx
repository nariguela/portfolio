import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ContactSection } from "@/sections/contact-section";
import { HeroSection } from "@/sections/hero-section";
import { ProjectsSection } from "@/sections/projects-section";
import { SkillsSection } from "@/sections/skills-section";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
