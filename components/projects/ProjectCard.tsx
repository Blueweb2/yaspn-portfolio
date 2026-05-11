import Image from "next/image";

import { IProject } from "@/types/project.types";

import ProjectDrawer from "./ProjectDrawer";
import { optimizeCloudinary } from "@/lib/cloudinary";

interface Props {
  project: IProject;
}

export default function ProjectCard({
  project,
}: Props) {
  return (
    <ProjectDrawer project={project}>
      <button className="group block w-full text-left">
        <div className="relative h-[320px] overflow-hidden">
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
            className="object-cover transition duration-700 group-hover:scale-105"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Content */}
          <div className="absolute bottom-0 left-0 w-full p-5">
            <h3 className="text-[22px] font-semibold text-white">
              {project.title}
            </h3>

            <p className="mt-1 text-sm text-zinc-300">
              {project.location ||
                "Location not specified"}
            </p>
          </div>
        </div>
      </button>
    </ProjectDrawer>
  );
}