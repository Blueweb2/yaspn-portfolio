import Image from "next/image";

import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Sports Stadium",
    image:
      "/placeholder.jpg",
  },
  {
    title: "Luxury Resorts",
    image:
      "/placeholder.jpg",
  },
  {
    title: "High-rise Developments",
    image:
      "/placeholder.jpg",
  },
  {
    title: "Healthcare Systems",
    image:
      "/placeholder.jpg",
  },
];

export default function ProjectsSection() {
  return (
    <section className="bg-[#08142d] py-24">
      <Container>
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[3px] text-[#d69a2d]">
              Our Projects
            </p>

            <h2 className="text-4xl font-bold">
              Building the Future
            </h2>
          </div>

          <Button className="rounded-full bg-[#d69a2d] text-black hover:bg-[#c58d26]">
            View All Projects
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-white/10"
            >
              <div className="relative h-[420px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                <div className="absolute bottom-0 p-6">
                  <h3 className="text-2xl font-semibold">
                    {project.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}