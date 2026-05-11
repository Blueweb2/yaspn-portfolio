import ProjectsHero from "@/components/projects/ProjectsHero";

import ProjectsGrid from "@/components/projects/ProjectsGrid";

export default function ProjectsPage() {
  return (
    <main className="bg-[#08142d] text-white">
      {/* Hero */}
      <ProjectsHero />

      {/* Projects Grid */}
      <ProjectsGrid />
    </main>
  );
}