"use client";

import { useEffect, useState } from "react";

import {
  usePathname,
  useRouter,
} from "next/navigation";

import Link from "next/link";

import Image from "next/image";

import {
  LayoutDashboard,
  FolderKanban,
  BriefcaseBusiness,
  Settings,
  LogOut,
} from "lucide-react";

const sidebarLinks = [
  {
    label: "Dashboard",
    href: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Projects",
    href: "/admin/projects",
    icon: FolderKanban,
  },
  {
    label: "Services",
    href: "/admin/services",
    icon: BriefcaseBusiness,
  },

];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const pathname = usePathname();

  const [mounted, setMounted] =
    useState(false);

  useEffect(() => {
    setMounted(true);

    const token =
      localStorage.getItem("token");

    if (
      !token &&
      pathname !== "/admin/login"
    ) {
      router.push("/admin/login");
    }
  }, [pathname, router]);

  const handleLogout = () => {
    localStorage.removeItem("token");

    router.push("/admin/login");
  };

  if (!mounted) {
    return null;
  }

  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  return (
    <div className="flex min-h-screen bg-[#0A1224] text-white">
      {/* Sidebar */}
      <aside className="flex w-[280px] flex-col border-r border-white/10 bg-[#111C36]">
        
        {/* Logo */}
        <div className="flex h-20 items-center border-b border-white/10 px-8">
          <div className="relative h-14 w-[160px]">
            <Image
              src="/YASPN-WHITE.svg"
              alt="YASPN Logo"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-2 p-5">
          {sidebarLinks.map((link) => {
            const Icon = link.icon;

            const isActive =
              pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex h-14 items-center gap-4 rounded-2xl px-5 transition ${
                  isActive
                    ? "bg-[#D69A2D] text-white"
                    : "text-zinc-300 hover:bg-white/5"
                }`}
              >
                <Icon size={22} />

                <span className="font-medium">
                  {link.label}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="border-t border-white/10 p-5">
          <button
            onClick={handleLogout}
            className="flex h-14 w-full items-center gap-4 rounded-2xl px-5 text-zinc-300 transition hover:bg-white/5"
          >
            <LogOut size={22} />

            <span className="font-medium">
              Logout
            </span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex flex-1 flex-col">
        
        {/* Topbar */}
        <header className="flex h-20 items-center justify-between border-b border-white/10 bg-[#111C36]/80 px-8 backdrop-blur-xl">
          <div>
            <h2 className="text-2xl font-bold">
              Admin Panel
            </h2>
          </div>

          {/* Admin Avatar */}
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#D69A2D] font-bold">
              A
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}