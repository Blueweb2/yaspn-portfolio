import Link from "next/link";

import {
  FolderKanban,
  BriefcaseBusiness,
  Mail,
  Users,
  Plus,
} from "lucide-react";

const stats = [
  {
    title: "Total Projects",
    value: "12",
    icon: FolderKanban,
  },
  {
    title: "Services",
    value: "6",
    icon: BriefcaseBusiness,
  },
  {
    title: "Messages",
    value: "24",
    icon: Mail,
  },
  {
    title: "Users",
    value: "1",
    icon: Users,
  },
];

const latestProjects = [
  {
    title: "Sports Infrastructure",
    category: "Infrastructure",
    status: "Completed",
  },
  {
    title: "Healthcare System",
    category: "Healthcare",
    status: "Ongoing",
  },
  {
    title: "Education Campus",
    category: "Education",
    status: "Completed",
  },
];

const quickActions = [
  {
    title: "Add Project",
    href: "/admin/projects/create",
  },
  {
    title: "Add Service",
    href: "/admin/services/create",
  },
];

export default function AdminDashboardPage() {
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
        {stats.map((item) => {
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
            {latestProjects.map((project) => (
              <div
                key={project.title}
                className="flex items-center justify-between rounded-2xl border border-white/5 bg-[#182544] p-5"
              >
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {project.title}
                  </h3>

                  <p className="mt-1 text-sm text-zinc-400">
                    {project.category}
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
                  {project.status}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="rounded-3xl border border-white/10 bg-[#111C36] p-6">
          <h2 className="mb-6 text-2xl font-bold text-white">
            Quick Actions
          </h2>

          <div className="space-y-4">
            {quickActions.map((action) => (
              <Link
                key={action.title}
                href={action.href}
                className="flex h-16 items-center justify-between rounded-2xl border border-white/5 bg-[#182544] px-5 transition hover:border-[#D69A2D]"
              >
                <span className="font-medium text-white">
                  {action.title}
                </span>

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D69A2D] text-white">
                  <Plus size={18} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}