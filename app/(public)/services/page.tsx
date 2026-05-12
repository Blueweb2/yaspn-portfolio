import HeroSection from "@/components/service/HeroSection";
import Services from "@/components/service/Services";
import WhyChoose from "@/components/service/WhyChoose";

export default function ServicesPage() {
    return (
        <main className="bg-[#101012] text-white">
            <HeroSection />
            <Services />
            <WhyChoose />
        </main>
    );
};