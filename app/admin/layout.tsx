export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#0b1120] text-white">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-72 border-r border-white/10 bg-[#111827] p-6">
          <h2 className="mb-10 text-2xl font-bold">
            Yaspin Admin
          </h2>

          <nav className="space-y-4">
            <a
              href="/admin/dashboard"
              className="block rounded-lg px-4 py-3 transition hover:bg-white/10"
            >
              Dashboard
            </a>

            <a
              href="/admin/services"
              className="block rounded-lg px-4 py-3 transition hover:bg-white/10"
            >
              Services
            </a>

            <a
              href="/admin/projects"
              className="block rounded-lg px-4 py-3 transition hover:bg-white/10"
            >
              Projects
            </a>
          </nav>
        </aside>

        {/* Content */}
        <main className="flex-1 p-10">
          {children}
        </main>
      </div>
    </div>
  );
}