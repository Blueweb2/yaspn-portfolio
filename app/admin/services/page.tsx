export default function AdminServicesPage() {
  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-4xl font-bold">
          Services
        </h1>

        <button className="rounded-xl bg-[#d69a2d] px-5 py-3 font-semibold text-black">
          Add Service
        </button>
      </div>

      <div className="rounded-2xl bg-white/5 p-6">
        Services table here...
      </div>
    </div>
  );
}