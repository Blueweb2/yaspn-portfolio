import {
  Mail,
  MapPin,
  Phone,
  ArrowRight,
} from "lucide-react";

import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050816] py-24"
    >
      {/* Skyline Background */}
      <div className="absolute inset-x-0 top-0 h-44 bg-[url('/skyline.png')] bg-cover bg-center opacity-90" />

      <Container className="relative z-10">
        <div className="grid gap-16 lg:grid-cols-[1fr_420px] lg:items-end">
          {/* Left Content */}
          <div className="pt-28">
            {/* Logo */}
            <div className="mb-10">
              <h2 className="text-5xl font-black tracking-wider text-white">
                YASPN
              </h2>

              <p className="mt-1 text-[11px] uppercase tracking-[4px] text-zinc-500">
                Youth Athletic Sports Programming Network
              </p>
            </div>

            {/* Heading */}
            <h3 className="mb-5 text-4xl font-bold text-[#d69a2d]">
              Let&apos;s Build the Future Together
            </h3>

            <p className="max-w-md leading-8 text-zinc-400">
              We are always ready to discuss your project
              and explore how we can build the future
              together.
            </p>

            {/* Footer Links */}
            <div className="mt-16 grid gap-10 md:grid-cols-3">
              {/* Navigation */}
              <div className="space-y-4 text-zinc-300">
                <p className="cursor-pointer hover:text-[#d69a2d]">
                  Home
                </p>

                <p className="cursor-pointer hover:text-[#d69a2d]">
                  About Us
                </p>

                <p className="cursor-pointer hover:text-[#d69a2d]">
                  Services
                </p>

                <p className="cursor-pointer hover:text-[#d69a2d]">
                  Contact Us
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-6 md:col-span-2">
                <div className="flex items-start gap-4">
                  <Phone className="mt-1 size-5 text-[#d69a2d]" />

                  <p className="text-zinc-300">
                    +971 50 123 4567
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="mt-1 size-5 text-[#d69a2d]" />

                  <p className="text-zinc-300">
                    info@yaspn.com
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 size-5 text-[#d69a2d]" />

                  <p className="max-w-xs text-zinc-300">
                    PO Box 123456, Dubai,
                    <br />
                    United Arab Emirates
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-none bg-[#18497a] p-10 shadow-2xl">
            <h3 className="mb-10 text-4xl font-light text-white">
              Contact Us
            </h3>

            <div className="space-y-8">
              <Input
                placeholder="Your Name"
                className="rounded-none border-0 border-b border-white/40 bg-transparent px-0 text-white placeholder:text-zinc-300 focus-visible:ring-0"
              />

              <Input
                placeholder="Your Email"
                className="rounded-none border-0 border-b border-white/40 bg-transparent px-0 text-white placeholder:text-zinc-300 focus-visible:ring-0"
              />

              <Input
                placeholder="Subject"
                className="rounded-none border-0 border-b border-white/40 bg-transparent px-0 text-white placeholder:text-zinc-300 focus-visible:ring-0"
              />

              <Textarea
                placeholder="Your Message"
                rows={4}
                className="rounded-none border-0 border-b border-white/40 bg-transparent px-0 text-white placeholder:text-zinc-300 focus-visible:ring-0"
              />

              <Button className="mt-6 h-14 w-full rounded-none bg-[#d69a2d] text-base font-semibold text-white hover:bg-[#c58d26]">
                Send Message
                <ArrowRight className="ml-2 size-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="mt-16 border-t border-white/10 pt-6 text-center text-sm text-zinc-500">
          © 2026 YASPN. All rights reserved.
        </div>
      </Container>
    </section>
  );
}