import Container from "../layout/Container"

const GlobalVision = () => {
  return (
    <section className="w-full bg-[#0F1D3A] text-white py-20">
      <Container>

        {/* ───────────────── TOP SECTION ───────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE */}
          <div>
            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-10">
              A{" "}
              <span className="text-[#D89A1D]">
                Global Vision
              </span>
              <br />
              for a Better Tomorrow
            </h2>

            {/* Image */}
            <div className="w-full h-[260px] sm:h-[350px] md:h-[420px] overflow-hidden">
              <img
                src="/about-ground-explore.webp"
                alt="Global Vision"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div className="space-y-8 text-gray-300 text-[15px] leading-8">

            <p>
              YASPN (Youth Athletic Sports Programming Network) is a
              next-generation global development platform focused on creating
              integrated ecosystems that combine sports infrastructure,
              education, healthcare, hospitality, infrastructure, and sustainable
              urban development.
            </p>

            <p>
              Built on innovation, leadership, and long-term vision, YASPN is
              dedicated to empowering youth, strengthening communities, and
              delivering transformative projects designed for future generations.
            </p>

            <p>
              With a mission to create meaningful social and economic impact
              worldwide, YASPN develops high-quality environments that inspire
              growth, opportunity, and community well-being.
            </p>

            <p>
              From world-class sports facilities and educational institutions to
              healthcare centers, hospitality destinations, and urban
              developments, every initiative is designed to create lasting value
              for people and communities around the globe.
            </p>

            <p>
              YASPN was founded as part of Jacob Group, an organization with
              more than 40 years of business experience across the Middle East
              and India.
            </p>

            <p>
              Backed by the group’s extensive resources, expertise, and
              industry knowledge, YASPN is positioned to successfully deliver
              impactful projects on an international scale while maintaining a
              strong commitment to quality, sustainability, and innovation.
            </p>
          </div>
        </div>

        {/* ───────────────── DIVIDER ───────────────── */}
        <div className="border-t border-white/10 my-20"></div>

        {/* ───────────────── VISION SECTION ───────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* LEFT */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Our{" "}
              <span className="text-[#D89A1D]">
                Vision
              </span>
            </h2>
          </div>

          {/* RIGHT */}
          <div>
            <p className="text-gray-300 text-[15px] leading-8 max-w-xl">
              To be a globally recognized leader in integrated infrastructure and
              community development, creating sustainable environments that
              inspire growth, opportunity and innovation.
            </p>
          </div>
        </div>

        {/* ───────────────── DIVIDER ───────────────── */}
        <div className="border-t border-white/10 my-20"></div>

        {/* ───────────────── MISSION SECTION ───────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* LEFT */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Our{" "}
              <span className="text-[#D89A1D]">
                Mission
              </span>
            </h2>
          </div>

          {/* RIGHT */}
          <div className="space-y-6">

            <div className="flex items-start gap-4">
              <img src="/sportsman-icon.svg" alt="" className="w-5"/>
              <p className="text-gray-300">
                Provide world class developments with integrity and excellence
              </p>
            </div>

            <div className="flex items-start gap-4">
              <img src="/sportsman-icon.svg" alt="" className="w-5"/>
              <p className="text-gray-300">
                Youth empowerment through sports and education programs
              </p>
            </div>

            <div className="flex items-start gap-4">
              <img src="/sportsman-icon.svg" alt="" className="w-5"/>
              <p className="text-gray-300">
                Build resilient communities and future-ready infrastructure
              </p>
            </div>

            <div className="flex items-start gap-4">
              <img src="/sportsman-icon.svg" alt="" className="w-5"/>
              <p className="text-gray-300">
                Promote innovation, partnerships & long-term social impact
              </p>
            </div>

          </div>
        </div>

      </Container>
    </section>
  )
}

export default GlobalVision
