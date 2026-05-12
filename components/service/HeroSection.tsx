import Image from "next/image";
import Container from "../layout/Container";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
          <Image
            src="/services/Large-hospital.webp"
            alt="Services Hero"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-[#08152f]/75" />

          <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#08152f] to-transparent" />
      </div>

      <Container>
          <div className="relative z-10 flex min-h-[720px] items-center">
              <div className="max-w-3xl">
                  <p className="mb-4 text-sm uppercase tracking-[5px] text-[#F0A516]">
                      Our Services
                  </p>

                  <h1 className="max-w-4xl text-5xl font-black leading-tight md:text-7xl">
                      OUR <span className="text-[#F0A516]">SERVICES</span>
                  </h1>

                  <div className="mt-6 h-[3px] w-24 bg-[#F0A516]" />

                  <h2 className="mt-8 max-w-3xl text-3xl font-bold leading-tight md:text-5xl">
                      Comprehensive Development Solutions for a Better Tomorrow
                  </h2>

                  <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
                      YASPN delivers world-class infrastructure, sports, hospitality,
                      healthcare, education and real estate development solutions to
                      create sustainable communities and future-ready environments.
                  </p>
              </div>
          </div>
      </Container>
    </section>
  )
}

export default HeroSection;