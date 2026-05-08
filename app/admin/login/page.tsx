export default function AdminLoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#020617]">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#0f172a] p-8">
        <h1 className="mb-8 text-center text-3xl font-bold text-white">
          Admin Login
        </h1>

        <form className="space-y-5">
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none"
          />

          <button className="w-full rounded-xl bg-[#d69a2d] py-3 font-semibold text-black transition hover:opacity-90">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}