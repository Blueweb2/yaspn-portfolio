"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

import Container from "@/components/layout/Container";

import { getServices } from "@/services/service.api";

import { IService } from "@/types/service.types";

export default function ServicesSection() {
  const [services, setServices] =
    useState<IService[]>([]);

  const [loading, setLoading] =
    useState(true);

  // =========================
  // FETCH SERVICES
  // =========================

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);

        const res =
          await getServices();

        setServices(res.data || []);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <section
      id="services"
      className="relative overflow-hidden py-24"
    >
      {/* Background Image */}

      <div className="absolute inset-0">
        <Image
          src="/city.webp"
          alt="Background"
          fill
          className="object-cover"
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-[#08152f]/85" />

        <div className="absolute inset-x-0 top-0 h-52 bg-gradient-to-b from-[#141D33] to-transparent" />
      </div>

      <Container>
        <div className="relative z-10">
          {/* SECTION HEADER */}

          <div className="mb-16 text-center">
            <p className="mb-3 text-sm uppercase tracking-[4px] text-[#d69a2d]">
              Our Services
            </p>

            <h2 className="text-4xl font-bold text-white md:text-5xl">
              What We Do
            </h2>
          </div>

          {/* LOADING */}

          {loading ? (
            <div className="flex justify-center py-20">
              <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#d69a2d] border-t-transparent" />
            </div>
          ) : services.length === 0 ? (
            // EMPTY STATE

            <div className="text-center text-zinc-400">
              No services found.
            </div>
          ) : (
            // SERVICES GRID

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service._id}
                  className="group rounded-2xl border border-white/10 bg-[#0d1b3d]/90 p-8 transition duration-300 hover:border-[#d69a2d]"
                >
                  {/* ICON */}

                  <div className="mb-4">
                    <Image
                      src={
                        service.icon || ""
                      }
                      alt={service.title}
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>

                  {/* TITLE */}

                  <h3 className="mb-4 text-2xl font-bold text-white">
                    {service.title}
                  </h3>

                  {/* DESCRIPTION */}

                  <p className="leading-7 text-zinc-300">
                    {
                      service.description
                    }
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}