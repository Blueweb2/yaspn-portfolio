import Container from "@/components/layout/Container";

const stats = [
  {
    value: "40+",
    label: "Years Experience",
  },
  {
    value: "7000+",
    label: "People Employed",
  },
  {
    value: "100+",
    label: "Projects Completed",
  },
  {
    value: "3",
    label: "Countries Operating",
  },
];

export default function StatsSection() {
  return (
    <section className="py-16">
      <Container>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
            >
              <h3 className="text-5xl font-black text-white">
                {item.value}
              </h3>

              <p className="mt-4 uppercase tracking-[2px] text-zinc-400">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}