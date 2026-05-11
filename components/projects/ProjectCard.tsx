import Image from "next/image";

import { IProject } from "@/types/project.types";

import ProjectDrawer from "./ProjectDrawer";

interface Props {
  project: IProject;
}

export default function ProjectCard({
  project,
}: Props) {
  return (
    <ProjectDrawer project={project}>
      <button className="group block w-full overflow-hidden text-left">
        <div className="relative h-[580px] overflow-hidden">
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10" />

          {/* TOP LEFT TITLE */}
          <div className="absolute left-10 top-10 z-10">
            <h3 className="max-w-[280px] text-[42px] font-light leading-[1.1] text-white">
              {project.title}
            </h3>
          </div>

          {/* BOTTOM RIGHT FEATURES */}
          <div className="absolute bottom-8 right-8 z-10 flex flex-wrap justify-end gap-3">
            {project.features
              ?.slice(0, 2)
              .map(
                (
                  feature,
                  index
                ) => (
                  <div
                    key={index}
                    className="bg-black/40 px-5 py-3 text-sm font-medium text-white backdrop-blur-sm"
                  >
                    {
                      feature.label
                    }
                  </div>
                )
              )}
          </div>
        </div>
      </button>
    </ProjectDrawer>
  );
}