import Image from "next/image";
import Container from "../layout/Container";

const reasons = [
    {
        icon: "/services/icons-contact/trophy.svg",
        title: "40+ Years Industry Experience",
    },
    {
        icon: "/services/icons-contact/globe.svg",
        title: "Worldwide Infrastructure Experience",
    },
    {
        icon: "/services/icons-contact/lightbulb.svg",
        title: "Integrated Development Solutions(IDS)",
    },
    {
        icon: "/services/icons-contact/target.svg",
        title: "Vision-Driven & Future Focused",
    },
    {
        icon: "/services/icons-contact/Leadership.svg",
        title: "Strong Leadership & Implementation",
    },
];

const WhyChoose = () => {
  return (
    <section className="relative overflow-hidden  pt-24 pb-42">
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-[url('/services/skyline-cut-grdnt.svg')] bg-cover bg-center opacity-10" />

      <Container>
          <div className="relative z-10">
              <div className="text-center">
                  <h2 className="text-4xl font-bold md:text-5xl">
                      Why Choose YASPN?
                  </h2>
              </div>

              <div className="mt-20 grid gap-10 md:grid-cols-3 xl:grid-cols-5">
                  {reasons.map((reason, index) => (
                      <div
                          key={reason.title}
                          className="relative flex flex-col items-center px-6 text-center"
                      >
                          {/* LEFT SEPARATOR */}

                          {index !== 0 && (
                              <div className="absolute left-0 top-1/2 hidden h-52 w-px -translate-y-1/2 bg-white/10 xl:block" />
                          )}

                          {/* ICON */}

                          <Image
                              src={reason.icon}
                              alt={reason.title}
                              width={58}
                              height={58}
                              className="mb-8 object-contain"
                          />

                          {/* TITLE */}

                          <p className="max-w-[220px] text-xl leading-9 text-zinc-300">
                              {reason.title}
                          </p>
                      </div>
                  ))}
              </div>
          </div>
      </Container>
    </section>
  )
}

export default WhyChoose