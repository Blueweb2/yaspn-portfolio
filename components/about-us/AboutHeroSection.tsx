import Container from "../layout/Container"

const AboutHeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <img src="/about-page-bg.webp" alt="" className="absolute inset-0 h-full w-full object-cover"/>
      <Container className="relative">
        <h1 className="text-7xl">ABOUT US</h1>
      </Container>
    </section>
  );
};

export default AboutHeroSection;