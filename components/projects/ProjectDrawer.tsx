"use client";

import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { IProject } from "@/types/project.types";

interface Props {
    project: IProject;
    children: React.ReactNode;
}

export default function ProjectDrawer({
    project,
    children,
}: Props) {
    return (
        <Sheet>
            <SheetTrigger asChild>
                {children}
            </SheetTrigger>

            <SheetContent
                side="right"
                className="!w-[100vw] sm:!w-[92vw] md:!w-[60vw] lg:!w-[40vw] xl:!w-[45vw] !max-w-none overflow-y-auto border-none bg-[#f7f7f5] p-0 text-black"
            >
                {/* Close Button */}

                {/* Thumbnail */}
                <div className="relative h-[420px] w-full bg-zinc-200">
                    <Image
                        src={
                            project.thumbnail?.trim()
                                ? project.thumbnail
                                : "/placeholder.jpg"
                        }
                        alt={project.title}
                        width={1200}
                        height={800}
                        className="h-full w-full object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/20" />
                </div>

                {/* Content */}
                <div className="space-y-10 px-14 py-16">
                    {/* Category */}
                    <div>
                        <p className="text-sm uppercase tracking-[6px] text-zinc-500">
                            {project.category}
                        </p>
                    </div>

                    {/* Title */}
                    <div>
                        <h2 className="max-w-3xl text-6xl font-light leading-[1.05] tracking-tight text-black">
                            {project.title}
                        </h2>
                    </div>

                    {/* Description */}
                    <div>
                        <p className="text-lg leading-9 text-zinc-600">
                            {project.description ||
                                "No description available for this project."}
                        </p>
                    </div>

                    {/* Location */}
                    <div className="border-t border-zinc-300 pt-8">
                        <h3 className="mb-4 text-sm uppercase tracking-[5px] text-zinc-500">
                            Location
                        </h3>

                        <p className="text-2xl font-medium text-black">
                            {project.location ||
                                "Location not specified"}
                        </p>
                    </div>

                    {/* Client */}
                    {project.client && (
                        <div className="border-t border-zinc-300 pt-8">
                            <h3 className="mb-4 text-sm uppercase tracking-[5px] text-zinc-500">
                                Client
                            </h3>

                            <p className="text-2xl font-medium text-black">
                                {project.client}
                            </p>
                        </div>
                    )}

                    {/* Completion Year */}
                    {project.completionYear && (
                        <div className="border-t border-zinc-300 pt-8">
                            <h3 className="mb-4 text-sm uppercase tracking-[5px] text-zinc-500">
                                Completion Year
                            </h3>

                            <p className="text-2xl font-medium text-black">
                                {project.completionYear}
                            </p>
                        </div>
                    )}

                    {/* Features */}
                    {project.features &&
                        project.features.length >
                        0 && (
                            <div className="border-t border-zinc-300 pt-8">
                                <h3 className="mb-6 text-sm uppercase tracking-[5px] text-zinc-500">
                                    Features
                                </h3>

                                <div className="flex flex-wrap gap-4">
                                    {project.features.map(
                                        (
                                            feature,
                                            index
                                        ) => (
                                            <div
                                                key={index}
                                                className="bg-white px-6 py-4 text-sm font-medium text-black shadow-sm"
                                            >
                                                {
                                                    feature.label
                                                }
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        )}
                </div>
            </SheetContent>
        </Sheet>
    );
}