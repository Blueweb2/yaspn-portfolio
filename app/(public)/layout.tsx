"use client";

import { usePathname } from "next/navigation";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const hideFooter =
    pathname === "/contact";

  return (
    <>
      <Navbar />

      {children}

      {!hideFooter && <Footer />}
    </>
  );
}