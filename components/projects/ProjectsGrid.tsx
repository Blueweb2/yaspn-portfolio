"use client";

import { useEffect, useState } from "react";

import { getProjects } from "@/services/project.api";
import { IProject } from "@/types/project.types";
import ProjectCard from "./ProjectCard";

export default function ProjectsGrid() {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProjects();
        setProjects(data);
      } catch {
        console.error("Failed to load projects");
      } finally {
        setLoading(false);
      }
    };

    void fetchProjects();
  }, []);

  if (loading) {
    return <div className="text-center text-zinc-400 py-12">Loading projects...</div>;
  }

  return (
    <section className="pt-12 pb-52 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}