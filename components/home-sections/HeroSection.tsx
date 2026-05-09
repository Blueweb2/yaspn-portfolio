import Image from "next/image";

import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";


export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="/herovideo.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark Overlay */}
      {/* <div className="absolute inset-0 bg-black/70" /> */}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050816] via-[#050816]/70 to-transparent" />

      <Container className="relative z-10 pt-28">
        <div className="max-w-2xl space-y-6">
          <p className="text-sm uppercase tracking-[4px] text-[#d69a2d]">
            Youth Athletic Sports Programming Network
          </p>

          <div className="space-y-2">
            <h1 className="text-5xl font-black leading-tight text-white md:text-7xl">
              VISION INTO
            </h1>

            <h1 className="text-5xl font-black leading-tight text-[#d69a2d] md:text-7xl">
              REALITY
            </h1>
          </div>

          <div className="space-y-2 text-2xl font-semibold text-zinc-200 md:text-4xl">
            <p>Inspiring Legacies.</p>

            <p>Uplifting Youth.</p>

            <p className="text-[#d69a2d]">
              Strengthening Communities.
            </p>
          </div>

          <Button className="rounded-full bg-[#d69a2d] px-8 py-6 text-base font-semibold text-black hover:bg-[#c58d26]">
            Learn More
          </Button>
        </div>
      </Container>
    </section>
  );
}