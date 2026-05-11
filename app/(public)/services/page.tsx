

import Image from "next/image";

import Container from "@/components/layout/Container";



const services = [
    {
        title: "Infrastructure for Sports",
        description:
            "We construct modern stadiums, sports complexes, training academies and multi-purpose athletic facilities to international standards.",
        image: "/services/Big-Stadium.webp",
        points: [
            "Sports Academies",
            "Stadium Development",
            "Training Facilities",
            "Indoor & Outdoor Sports Complexes",
            "Youth development programs",
        ],
    },
    {
        title: "Education & Youth Development",
        description:
            "Building innovative learning environments to inspire future generations through education,leadership and sports-based learning.",
        image: "/services/education.webp",
        points: [
            "K-12 Educational Campuses",
            "Leadership and Development Opportunities",
            "Integration Sports Education",
            "Programs for Youth Development",
        ],
    },
    {
        title: "Healthcare & Well-being",
        description:
            "Advancing healthcare through modern hospitals and wellness centers.",
        image: "/services/healthcare.webp",
        points: [
            "Multi Speciality Hospitals",
            "Wellness Centers",
            "Medical Institutions",
            "Healthcare Infrastructure",
        ],
    },
    {
        title: "Tourism & Hospitality",
        description:
            "Luxury hospitality projects that provide premium experiences and tourism growth.",
        image: "/services/hospitality.webp",
        points: [
            "Luxury Hotels",
            "Sports Resorts",
            "Tourism Destinations",
            "Entertainment Developments",
        ],
    },
    {
        title: "Real Estate Development",
        description:
            "Innovative urban planning for premium residential and commercial developments.",
        image: "/services/real-estate.webp",
        points: [
            "High Rise Buildings",
            "Luxury Villas",
            "Commercial Towers",
            "Smart Urban Communities",
        ],
    },
    {
        title: "Industrial & Energy",
        description:
            "Industrial infrastructure solutions to support sustainable economic growth.",
        image: "/services/industrial.webp",
        points: [
            "Power Plants",
            "Industrial Facilities",
            "Refinery Projects",
            "Infrastructure Construction",
        ],
    },
    {
        title: "Project Management & Consulting",
        description:
            "Planning, engineering, management and execution services for global projects.",
        image: "/services/consulting.webp",
        points: [
            "Infrastructure Consultancy",
            "Master Planning",
            "Engineering Design",
            "Project Management",
        ],
    },
];

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

export default function ServicesPage() {
    return (
        <main className="bg-[#101012] text-white">
            {/* HERO SECTION */}

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

            {/* SERVICES */}

            <section className="relative py-24">
                <Container>
                    <div className="space-y-10">
                        {services.map((service, index) => (
                            <div
                                key={service.title}
                                className="grid overflow-hidden border-b-[3px] border-b-[#1B3A5B] bg-[#112347] md:grid-cols-2"
                            >
                                {/* IMAGE */}

                                <div
                                    className={`relative min-h-[320px] ${index % 2 !== 0
                                        ? "md:order-2"
                                        : ""
                                        }`}
                                >
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover grayscale"
                                    />
                                </div>

                                {/* CONTENT */}

                                <div className="flex flex-col justify-center p-8 md:p-12">
                                    <h2 className="text-3xl font-bold text-[#F0A516]">
                                        {service.title}
                                    </h2>

                                    <p className="mt-5 leading-8 text-zinc-300">
                                        {service.description}
                                    </p>

                                    <div className="mt-8">
                                        <h3 className="mb-4 text-lg font-semibold text-white">
                                            Services Include :
                                        </h3>

                                        <ul className="space-y-3 text-zinc-300">
                                            {service.points.map((point) => (
                                                <li
                                                    key={point}
                                                    className="flex items-center gap-3"
                                                >
                                                    <Image
                                                        src="/sportsman-icon.svg"
                                                        alt="Check"
                                                        width={14}
                                                        height={14}
                                                        className="object-contain"
                                                    />
                                                    <span>{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* WHY CHOOSE */}

            <section className="relative overflow-hidden  pt-24 pb-42">
                <div className="absolute bottom-0 left-0 right-0 h-40 bg-[url('/city.webp')] bg-cover bg-center opacity-10" />

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

            {/* CONTACT SECTION */}


        </main>
    );
}
