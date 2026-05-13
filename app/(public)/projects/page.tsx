import ProjectsHero from "@/components/projects/ProjectsHero";

import ProjectsGrid from "@/components/projects/ProjectsGrid";

export default function ProjectsPage() {
  return (
    <main className="relative overflow-hidden bg-[#162037] text-white pb-32">
      {/* Hero */}
      <ProjectsHero />

      {/* Projects Grid */}
      <ProjectsGrid />
      {/* Bottom Skyline Cut */}
      <div className="absolute bottom-0 left-0 w-full">
        <img
          src="/skyline-cut-Black.svg"
          alt="Skyline"
          className="h-[200px] md:h-[300px] lg:h-auto w-full object-cover opacity-90"
        />
      </div>
    </main>
  );
}