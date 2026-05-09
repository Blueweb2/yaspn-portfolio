import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/home-sections/HeroSection";
import AboutSection from "@/components/home-sections/AboutSection";
import StatsSection from "@/components/home-sections/StatsSection";
import ServicesSection from "@/components/home-sections/ServicesSection";
import FounderSection from "@/components/home-sections/FounderSection";
import ProjectsSection from "@/components/home-sections/ProjectsSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#050816] text-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <ServicesSection />
      <FounderSection />
      <ProjectsSection />
      <Footer />
    </main>
  );
};