import Image from "next/image";
import { Check } from "lucide-react";

import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";

const achievements = [
  "40+ Years of Construction and Infrastructure Leadership",
  "Delivered landmark residential, hotel and industrial projects",
  "Successfully launched businesses in UAE & Saudi Arabia",
  "Created jobs for 7000+ professionals",
  "Deep commitment to community development & social impact",
];

export default function FounderSection() {
  return (
    <section className="bg-black py-24">
      <Container>
        <div className="grid gap-10 rounded-3xl bg-[#0d1b3d] p-10 lg:grid-cols-2 lg:items-center">
          {/* Left */}
          <div>
            <p className="mb-3 text-sm uppercase tracking-[3px] text-[#d69a2d]">
              Chairman & Founder
            </p>

            <h2 className="mb-6 text-4xl font-bold">
              Jacob Cheruvallil
            </h2>

            <p className="mb-8 leading-8 text-zinc-300">
              Visionary entrepreneur with over 40 years of experience
              in infrastructure development, construction, real estate,
              and global business operations.
            </p>

            <div className="space-y-4">
              {achievements.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1 rounded-full bg-[#d69a2d]/20 p-1 text-[#d69a2d]">
                    <Check className="size-3" />
                  </div>

                  <p className="text-zinc-300">{item}</p>
                </div>
              ))}
            </div>

            <Button className="mt-10 rounded-full bg-[#d69a2d] text-black hover:bg-[#c58d26]">
              View Profile
            </Button>
          </div>

          {/* Right */}
          <div className="relative mx-auto h-[450px] w-full max-w-md">
            <div className="absolute inset-0 translate-x-6 translate-y-6 rounded-3xl border border-white/20" />

            <div className="relative h-full overflow-hidden rounded-3xl border border-white/10">
              <Image
                src="/jacob.png"
                alt="Founder"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}