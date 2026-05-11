import Navbar from "@/components/layout/Navbar";

import Footer from "@/components/layout/Footer";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="overflow-hidden bg-[#050816] text-white">
      <Navbar />

      {children}

      <Footer />
    </main>
  );
}