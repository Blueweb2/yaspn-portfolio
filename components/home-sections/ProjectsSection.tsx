"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

import Link from "next/link";

import Container from "@/components/layout/Container";

import { Button } from "@/components/ui/button";

import { getProjects } from "@/services/project.api";

import { IProject } from "@/types/project.types";
import { optimizeCloudinary } from "@/lib/cloudinary";

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
                href="#"
                className="group block overflow-hidden"
              >
                <div className="relative h-[580px] overflow-hidden">
                  {/* Image */}
                  <Image
                    src={
                      project.thumbnail
                        ? optimizeCloudinary(
                          project.thumbnail
                        )
                        : "/placeholder.jpg"
                    }
                    alt={project.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10" />

                  {/* TOP LEFT TITLE */}
                  <div className="absolute left-10 top-10 z-10">
                    <h3 className="max-w-[280px] text-[42px] font-light leading-[1.1] text-white">
                      {project.title}
                    </h3>
                  </div>

                  {/* BOTTOM RIGHT LOCATION */}
                  <div className="absolute bottom-8 right-8 z-10">
                    <div className="bg-black/40 px-6 py-4 text-sm font-medium text-white backdrop-blur-sm">
                      {project.location ||
                        "Location not specified"}
                    </div>
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