export default function DashboardPage() {
  return (
    <div>
      <h1 className="mb-8 text-4xl font-bold">
        Dashboard
      </h1>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl bg-white/5 p-6">
          <h2 className="text-xl font-semibold">
            Services
          </h2>

          <p className="mt-3 text-4xl font-bold">
            6
          </p>
        </div>

        <div className="rounded-2xl bg-white/5 p-6">
          <h2 className="text-xl font-semibold">
            Projects
          </h2>

          <p className="mt-3 text-4xl font-bold">
            24
          </p>
        </div>
      </div>
    </div>
  );
}