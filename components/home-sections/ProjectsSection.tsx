"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

import Link from "next/link";

import Container from "@/components/layout/Container";

import { Button } from "@/components/ui/button";

import { getProjects } from "@/services/project.api";

import { IProject } from "@/types/project.types";

export default function ProjectsSection() {
  const [projects, setProjects] =
    useState<IProject[]>([]);

  const [loading, setLoading] =
    useState(true);

  // =========================
  // FETCH PROJECTS
  // =========================

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProjects();

        setProjects(data.slice(0, 4));
      } catch {
        console.error("Failed to load projects");
      } finally {
        setLoading(false);
      }
    };

    void fetchProjects();
  }, []);

  return (
    <section className="bg-[#08142d] py-24">
      <Container>
        {/* Header */}
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[3px] text-[#d69a2d]">
              Our Projects
            </p>

            <h2 className="text-4xl font-bold text-white">
              Building the Future
            </h2>
          </div>

          <Link href="/projects">
            <Button className="rounded-full bg-[#d69a2d] text-black hover:bg-[#c58d26]">
              View All Projects
            </Button>
          </Link>
        </div>

        {/* Loading */}
        {loading ? (
          <div className="py-20 text-center text-zinc-400">
            Loading projects...
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {projects.map((project) => (
              <Link
                key={project._id}
                href={`/projects/${project.slug}`}
                className="group overflow-hidden rounded-2xl border border-white/10"
              >
                <div className="relative h-[420px]">
                  <Image
                    src={
                      project.thumbnail ||
                      "/placeholder.jpg"
                    }
                    alt={project.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                  {/* Content */}
                  <div className="absolute bottom-0 p-6">
                    <p className="mb-2 text-sm uppercase tracking-[2px] text-[#d69a2d]">
                      {project.category}
                    </p>

                    <h3 className="text-2xl font-semibold text-white">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}