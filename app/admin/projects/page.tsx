"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Pencil, Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { getProjects, deleteProject } from "@/services/project.api";
import { IProject } from "@/types/project.types";

export default function ProjectsPage() {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState<IProject[]>([]);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const data = await getProjects();
      setProjects(data);
    } catch {
      toast.error("Failed to fetch projects");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const loadProjects = async () => {
      await fetchProjects();
    };

    void loadProjects();
  }, []);

  const handleDelete = async (id: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this project?"
    );

    if (!confirmed) return;

    try {
      const token = localStorage.getItem("token");

      if (!token) {
        return toast.error("Unauthorized");
      }

      await deleteProject(id, token);

      toast.success("Project deleted successfully");
      fetchProjects();
    } catch {
      toast.error("Failed to delete project");
    }
  };

  if (loading) {
    return (
      <div className="py-20 text-center text-zinc-400">
        Loading projects...
      </div>
    );
  }

  return (
    <section className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-white">Projects</h1>
          <p className="mt-2 text-zinc-400">Manage all projects here.</p>
        </div>

        <Link
          href="/admin/projects/create"
          className="flex h-14 items-center gap-3 rounded-2xl bg-[#D69A2D] px-6 font-semibold text-white transition hover:opacity-90"
        >
          <Plus size={20} />
          <span>Add Project</span>
        </Link>
      </div>

      <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#111C36]">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px]">
            <thead className="border-b border-white/10 bg-[#182544]">
              <tr>
                <th className="px-6 py-5 text-left text-sm font-semibold text-zinc-300">Thumbnail</th>
                <th className="px-6 py-5 text-left text-sm font-semibold text-zinc-300">Title</th>
                <th className="px-6 py-5 text-left text-sm font-semibold text-zinc-300">Category</th>
                <th className="px-6 py-5 text-left text-sm font-semibold text-zinc-300">Status</th>
                <th className="px-6 py-5 text-left text-sm font-semibold text-zinc-300">Actions</th>
              </tr>
            </thead>

            <tbody>
              {projects.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-10 text-center text-zinc-400">
                    No projects found.
                  </td>
                </tr>
              ) : (
                projects.map((project) => (
                  <tr key={project._id} className="border-b border-white/5">
                    <td className="px-6 py-5">
                      <div className="relative h-20 w-32 overflow-hidden rounded-2xl bg-zinc-950">
                        <Image
                          src={project.thumbnail || "/placeholder.png"}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </td>

                    <td className="px-6 py-5">
                      <div>
                        <h3 className="font-semibold text-white">{project.title}</h3>
                        <p className="mt-1 text-sm text-zinc-400">{project.slug}</p>
                      </div>
                    </td>

                    <td className="px-6 py-5 text-zinc-300">{project.category}</td>

                    <td className="px-6 py-5">
                      <div
                        className={`inline-flex rounded-full px-4 py-2 text-sm font-medium ${
                          project.status === "completed"
                            ? "bg-green-500/15 text-green-400"
                            : "bg-yellow-500/15 text-yellow-400"
                        }`}
                      >
                        {project.status}
                      </div>
                    </td>

                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <Link
                          href={`/admin/projects/edit/${project._id}`}
                          className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400 transition hover:bg-blue-500/25"
                        >
                          <Pencil size={18} />
                        </Link>

                        <button
                          type="button"
                          onClick={() => handleDelete(project._id!)}
                          className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/15 text-red-400 transition hover:bg-red-500/25"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
