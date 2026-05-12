"use client";

import { useState } from "react";

import { toast } from "sonner";

import { sendContactMessage } from "@/services/contact.api";
import {
  Mail,
  MapPin,
  Phone,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactSection() {

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

  const [loading, setLoading] =
    useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,

      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      await sendContactMessage({
        firstName:
          formData.name,

        lastName: "",

        email:
          formData.email,

        phone: "",

        company: "",

        service:
          formData.subject,

        location: "",

        message:
          formData.message,
      });

      toast.success(
        "Message sent successfully"
      );

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch {
      toast.error(
        "Failed to send message"
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <section
      id="contact"
      className="relative bg-[#050816]"
    >
      {/* Skyline Background */}
      <div className="absolute inset-x-0 top-0 h-44 bg-[url('/skyline.png')] bg-cover bg-center opacity-90" />

      <Container className="relative">
        <div className="grid gap-10 lg:gap-16 lg:grid-cols-[1fr_420px] lg:items-end border-b border-gray-700 pb-10">


          {/* Left Content */}
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">

            {/* Logo */}
            <div className="w-full lg:flex-1">
              <div className="relative h-20 w-[180px]">
                <Image
                  src="/YASPN-WHITE.svg"
                  alt="YASPN Logo"
                  fill
                  priority
                  className="object-contain"
                />
              </div>

              {/* Jacobs Logo */}
              {/* Jacobs Branding */}
              <div className="my-4 flex items-center gap-3">
                <span className="text-3xl font-light text-white/90">
                  By
                </span>

                <div className="relative h-20 w-[160px]">
                  <Image
                    src="/Jacobswhite.svg"
                    alt="Jacobs Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Heading */}
              <h3 className="mb-2 text-[#d69a2d]">
                Let&apos;s Build the Future Together
              </h3>

              <p className="max-w-[340px] text-base leading-7 text-zinc-300">
                We are always ready to discuss your project
                and explore how we can build the future
                together.
              </p>
            </div>

            {/* Footer Links */}
            <div className="w-full lg:flex-1 flex items-start lg:items-center lg:justify-center">
              {/* Navigation */}
              <div className="space-y-5 text-base text-zinc-200">
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
            </div>

            {/* Contact Info */}
            <div className="space-y-7 text-base text-zinc-200 w-full lg:flex-1">
              <div className="flex items-start gap-4">
                <Phone className="mt-1 size-5 text-[#d69a2d]" />
                <p>
                  +96 65490 22228
                </p>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="size-4 text-[#d69a2d]" />
                <p>
                  info@yaspin.com
                </p>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="mt-1 size-5 shrink-0 text-[#d69a2d]" />

                <p>
                  YASPN Global Company
                  <br />
                  Building No:3277 Koob Ibn Malik, Al Amamrah Dist.,Dammam, Kingdom of Saudi Arabia
                  <br />
                  Postal Code:32415
                </p>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          {/* Contact Form */}
          <div className="hidden lg:block bg-[#18497a] p-7 shadow-2xl z-30 mt-[-130px]">
            <h3 className="mb-5 text-3xl font-light text-white">
              Contact Us
            </h3>

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <Input
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="rounded-none border-0 border-b border-white/40 bg-transparent px-0 text-white placeholder:text-zinc-300 focus-visible:ring-0"
              />

              <Input
                type="email"
                placeholder="Your Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="rounded-none border-0 border-b border-white/40 bg-transparent px-0 text-white placeholder:text-zinc-300 focus-visible:ring-0"
              />

              <Input
                placeholder="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="rounded-none border-0 border-b border-white/40 bg-transparent px-0 text-white placeholder:text-zinc-300 focus-visible:ring-0"
              />

              <Textarea
                placeholder="Your Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className="rounded-none border-0 border-b border-white/40 bg-transparent px-0 text-white placeholder:text-zinc-300 focus-visible:ring-0"
              />

              <Button
                type="submit"
                disabled={loading}
                className="mt-3 h-14 w-full rounded-none bg-[#d69a2d] text-base font-semibold text-white hover:bg-[#c58d26]"
              >
                {loading
                  ? "Sending..."
                  : "Send Message"}

                <ArrowRight className="ml-2 size-5" />
              </Button>
            </form>
          </div>
        </div>


      </Container>

      <Container className="py-6 lg:py-10">
        <div className="flex items-center justify-center">
          <p className="text-sm text-center text-zinc-400">
            © 2026 YASPN. All rights reserved.
          </p>
        </div>
      </Container>

    </section>
  );
};