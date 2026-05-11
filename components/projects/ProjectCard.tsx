import Image from "next/image";

import Link from "next/link";

import { IProject } from "@/types/project.types";

interface Props {
  project: IProject;
}

export default function ProjectCard({
  project,
}: Props) {
  return (
    <Link
      href="#"
      className="group overflow-hidden"
    >
      <div className="relative h-[420px] overflow-hidden rounded-sm">
        {/* Image */}
        <Image
          src={
            project.thumbnail ||
            "/placeholder.jpg"
          }
          alt={project.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 p-6">
          <h2 className="text-4xl font-bold text-white">
            {project.title}
          </h2>

          <p className="mt-2 text-sm text-zinc-300">
            {project.location ||
              project.category}
          </p>
        </div>
      </div>
    </Link>
  );
}