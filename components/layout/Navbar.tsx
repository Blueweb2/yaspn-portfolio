"use client";

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
} from "@/components/ui/sheet";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact Us", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full">
      <Container>
        <div className="flex h-24 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-20">
            <div className="relative h-20 w-[220px]">
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
              {navLinks.map((item, index) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`group relative text-[14px] font-medium transition ${
                    index === 0
                      ? "text-[#d69a2d]"
                      : "text-white hover:text-[#d69a2d]"
                  }`}
                >
                  {item.label}

                  {/* Active underline */}
                  {index === 0 && (
                    <span className="absolute -bottom-4 left-1/2 h-[2px] w-12 -translate-x-1/2 rounded-full bg-white" />
                  )}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <Button className="h-13 rounded-full bg-[#d69a2d] text-[14px] px-8  text-white hover:bg-[#c58d26]">
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
                className="border-white/10 bg-[#050816] text-white"
              >
                <div className="mt-16 flex flex-col gap-8">
                  {navLinks.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="text-xl font-medium text-zinc-200 transition hover:text-[#d69a2d]"
                    >
                      {item.label}
                    </Link>
                  ))}

                  <Button className="mt-6 h-14 rounded-full bg-[#d69a2d] text-base font-semibold text-white hover:bg-[#c58d26]">
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