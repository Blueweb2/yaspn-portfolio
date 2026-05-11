import Container from "../layout/Container";

const Introduction = () => {
  return (
    <section className="relative w-full overflow-hidden bg-black py-20 text-white">
  
      <Container className="">
        {/* Background Big Text */}
        <h1 className="absolute top-20 left-1/2 -translate-x-1/2 text-[50px] md:text-[130px] font-bold 
        text-white/10 whitespace-nowrap select-none">
          Chairman Message
        </h1>

        <div className="relative z-10 px-6 flex flex-col items-center text-center pb-28">
          
          {/* Profile Image */}
          <div className="relative w-[240px] sm:w-[280px] md:w-[320px] mt-[-90px]">
            <img
              src="/about-jacob.png"
              alt="Chairman"
              className="w-full object-cover"
            />
          </div>

          {/* Name */}
          <h2 className="mt-8 text-[#D89A1D] text-2xl md:text-3xl font-bold uppercase">
            Jacob Cheruvallil
          </h2>

          {/* Role */}
          <p className="mt-2 text-gray-400 text-sm tracking-wide">
            Chairman & Founder
          </p>

          {/* Decorative Quote */}
          <div>
            <img src="/QUOTE.svg" alt="" className="w-28 h-28" />
          </div>

          {/* Content */}
          <div className="mt-10 max-w-4xl space-y-2 text-gray-300 text-[15px] ">
            
            <p>
              At YASPN we envision a better future, a future that empowers youth, strengthens communities and creates sustainable global developments.
            </p>

            <p>
              I have been working on infrastructure projects in the Middle East and India for over 40 years and I have seen the power of strong leadership and well-planned projects. From high-rise buildings and large-scale industrial facilities to community-driven projects, our journey has always been grounded in excellence, integrity and purpose.
            </p>

            <p>
              Our mission is more than building. We aim to create ecosystems that bring together sports, education, healthcare and world class infrastructure, creating opportunities for growth and long-term impact.
            </p>

            <p>
              Over my career, I have had the opportunity to create jobs for thousands of people and have participated in significant social initiatives, such as providing housing, education, and community support. These principles remain core to the mission of YASPN.
            </p>

            <p>
              Going forward, we are focused on innovation, sustainability, and global cooperation. We will continue to strive to create projects that meet international standards, provide support for the people affected by the projects, and serve to inspire future generations.
            </p>
          </div>

          {/* Bottom Quote */}
          <h3 className="mt-12 text-xl font-semibold text-white">
            Together, we are building more than infrastructure — we are building a legacy.
          </h3>
        </div>

        {/* Bottom SVG Skyline */}
        <div className="absolute bottom-0 left-0 w-full">
          <img
            src="/stats-skyline.svg"
            alt="City Skyline"
            className="w-full object-cover"
          />
        </div>
      </Container>

    </section>
  );
};

export default Introduction;