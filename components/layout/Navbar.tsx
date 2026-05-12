"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MoveRight, Menu } from "lucide-react";
import { motion } from "framer-motion";
import Container from "./Container";
import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 z-50 w-full ${scrolled ? "bg-black backdrop-blur-md" : "bg-transparent"
      }`}>
      <Container>
        <div className="flex h-24 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-20">
            <div className="relative h-16 w-32 md:h-20 md:w-[220px]">
              <Image
                src="/YASPN-WHITE.svg"
                alt="YASPN Logo"
                fill
                priority
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-14 lg:flex">
            <nav className="flex items-center gap-12">
              {navLinks.map((item, index) => {

                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`group relative text-[14px] font-medium transition ${isActive
                      ? "text-[#d69a2d]"
                      : "text-white hover:text-[#d69a2d]"
                      }`}
                  >
                    {item.label}

                    {/* Active underline */}
                    {isActive && (
                      <span className="absolute -bottom-4 left-1/2 h-[2px] w-12 -translate-x-1/2 rounded-full bg-white" />
                    )}
                  </Link>
                )
              })}
            </nav>

            {/* CTA Button */}
            <Button className="rounded-full bg-[#d69a2d] text-[13px] text-sm px-4 py-3  text-white hover:bg-[#184873]">
              Get In Touch

              <motion.div
                animate={{ x: [0, 6, 0] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="ml-2"
              >
                <MoveRight className="size-5" />
              </motion.div>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-white hover:bg-white/10"
                >
                  <Menu className="size-7" />
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-[85%] border-white/10 bg-[#050816] p-6 text-white sm:max-w-sm"
              >
                <div className="mt-14 flex h-full flex-col">
                  {navLinks.map((item) => (
                    <SheetClose asChild key={item.label}>
                      <Link
                        href={item.href}
                        className="text-lg font-semibold text-zinc-200 transition hover:text-[#d69a2d]"
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  ))}

                  <Button className="mt-10 h-14 w-full rounded-full bg-[#d69a2d] text-base font-semibold text-white hover:bg-[#c58d26]">
                    Get In Touch

                    <motion.div
                      animate={{ x: [0, 6, 0] }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="ml-2"
                    >
                      <MoveRight className="size-5" />
                    </motion.div>

                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>

        </div>
      </Container>
    </header>
  );
}