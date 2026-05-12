"use client";

import Link from "next/link";

import {
  FolderKanban,
  BriefcaseBusiness,
  Users,
  Plus,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

import {
  getDashboardStats,
  getLatestProjects,
} from "@/services/dashboard.api";

interface DashboardStats {
  projects: number;
  services: number;
  users: number;
}

interface LatestProject {
  title: string;
  category: string;
  status: string;
}

const statIcons = {
  projects: FolderKanban,
  services: BriefcaseBusiness,
  users: Users,
};

export default function AdminDashboardPage() {
  const [stats, setStats] =
    useState<DashboardStats | null>(null);

  const [projects, setProjects] =
    useState<LatestProject[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const loadDashboard =
      async () => {
        try {
          const statsData =
            await getDashboardStats();

          const projectsData =
            await getLatestProjects();

          setStats(statsData);

          setProjects(projectsData);
        } catch {
          console.error("Failed to load dashboard data");
        } finally {
          setLoading(false);
        }
      };

    void loadDashboard();
  }, []);

  const statCards = [
    {
      title: "Total Projects",
      value:
        stats?.projects || 0,
      icon:
        statIcons.projects,
    },
    {
      title: "Services",
      value:
        stats?.services || 0,
      icon:
        statIcons.services,
    },
    {
      title: "Users",
      value:
        stats?.users || 0,
      icon:
        statIcons.users,
    },
  ];

  const quickActions = [
    {
      title: "Add Project",
      href:
        "/admin/projects/create",
    },
    {
      title: "Add Service",
      href:
        "/admin/services/create",
    },
  ];

  if (loading) {
    return (
      <div className="flex h-[400px] items-center justify-center text-zinc-400">
        Loading dashboard...
      </div>
    );
  }

  return (
    <section className="space-y-10">
      {/* Heading */}
      <div>
        <h1 className="text-4xl font-bold text-white">
          Dashboard
        </h1>

        <p className="mt-2 text-zinc-400">
          Welcome back to YASPN admin panel.
        </p>
      </div>

      {/* Statistics */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {statCards.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-[#111C36] p-6"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-zinc-400">
                    {item.title}
                  </p>

                  <h2 className="mt-3 text-4xl font-bold text-white">
                    {item.value}
                  </h2>
                </div>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D69A2D]/15 text-[#D69A2D]">
                  <Icon size={28} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid gap-8 xl:grid-cols-[2fr_1fr]">
        {/* Latest Projects */}
        <div className="rounded-3xl border border-white/10 bg-[#111C36] p-6">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">
              Latest Projects
            </h2>

            <Link
              href="/admin/projects"
              className="text-sm text-[#D69A2D]"
            >
              View All
            </Link>
          </div>

          <div className="space-y-4">
            {projects && projects.length > 0 ? (
              projects.map(
                (project) => (
                <div
                  key={project.title}
                  className="flex items-center justify-between rounded-2xl border border-white/5 bg-[#182544] p-5"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {project.title}
                    </h3>

                    <p className="mt-1 text-sm text-zinc-400">
                      {
                        project.category
                      }
                    </p>
                  </div>

                  <div
                    className={`rounded-full px-4 py-2 text-sm font-medium ${
                      project.status ===
                      "Completed"
                        ? "bg-green-500/15 text-green-400"
                        : "bg-yellow-500/15 text-yellow-400"
                    }`}
                  >
                    {
                      project.status
                    }
                  </div>
                </div>
              )
            )
            ) : (
              <div className="text-center text-zinc-400 py-8">
                No projects yet
              </div>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="rounded-3xl border border-white/10 bg-[#111C36] p-6">
          <h2 className="mb-6 text-2xl font-bold text-white">
            Quick Actions
          </h2>

          <div className="space-y-4">
            {quickActions.map(
              (action) => (
                <Link
                  key={action.title}
                  href={
                    action.href
                  }
                  className="flex h-16 items-center justify-between rounded-2xl border border-white/5 bg-[#182544] px-5 transition hover:border-[#D69A2D]"
                >
                  <span className="font-medium text-white">
                    {
                      action.title
                    }
                  </span>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D69A2D] text-white">
                    <Plus size={18} />
                  </div>
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}