"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

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
        <div className="mt-4 flex h-16 items-center justify-between rounded-full border border-white/10 bg-black/20 px-6 backdrop-blur-md">
          {/* Logo */}
          <Link href="/">
            <div>
              <h1 className="text-2xl font-black tracking-wider text-white">
                YASPN
              </h1>

              <p className="text-[10px] uppercase tracking-[3px] text-zinc-400">
                Global Infrastructure
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm text-zinc-300 transition hover:text-[#d69a2d]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <Button className="rounded-full bg-[#d69a2d] px-6 text-black hover:bg-[#c58d26]">
              Get In Touch
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-white hover:bg-white/10"
                >
                  <Menu />
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="border-white/10 bg-[#050816] text-white"
              >
                <div className="mt-10 flex flex-col gap-6">
                  {navLinks.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="text-lg text-zinc-300 hover:text-[#d69a2d]"
                    >
                      {item.label}
                    </Link>
                  ))}

                  <Button className="mt-4 rounded-full bg-[#d69a2d] text-black hover:bg-[#c58d26]">
                    Get In Touch
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