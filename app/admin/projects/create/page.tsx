"use client";

import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import { toast } from "sonner";

import { Plus, Trash2 } from "lucide-react";

import { createProject } from "@/services/project.api";
import { getServices } from "@/services/service.api";

interface IService {
  _id: string;
  title: string;
}

export default function CreateProjectPage() {
  const router = useRouter();

  const [loading, setLoading] =
    useState(false);

  const [services, setServices] =
    useState<IService[]>([]);

  const [features, setFeatures] =
    useState([""]);

  const [technologies, setTechnologies] =
    useState([""]);

  const [formData, setFormData] =
    useState({
      title: "",
      slug: "",
      description: "",
      thumbnail: "",
      category: "",
      location: "",
      client: "",
      completionYear: "",
      status: "completed",
      liveLink: "",
      order: 0,
    });

  useEffect(() => {
    const fetchServices =
      async () => {
        try {
          const res =
            await getServices();

          setServices(res.data);
        } catch (error) {
          toast.error(
            "Failed to fetch services"
          );
        }
      };

    fetchServices();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleFeatureChange = (
    index: number,
    value: string
  ) => {
    const updated = [...features];

    updated[index] = value;

    setFeatures(updated);
  };

  const handleTechnologyChange = (
    index: number,
    value: string
  ) => {
    const updated = [
      ...technologies,
    ];

    updated[index] = value;

    setTechnologies(updated);
  };

  const addFeature = () => {
    setFeatures([
      ...features,
      "",
    ]);
  };

  const removeFeature = (
    index: number
  ) => {
    setFeatures(
      features.filter(
        (_, i) => i !== index
      )
    );
  };

  const addTechnology = () => {
    setTechnologies([
      ...technologies,
      "",
    ]);
  };

  const removeTechnology = (
    index: number
  ) => {
    setTechnologies(
      technologies.filter(
        (_, i) => i !== index
      )
    );
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      const token =
        localStorage.getItem(
          "token"
        );

      if (!token) {
        return toast.error(
          "Unauthorized"
        );
      }

      const payload = {
        ...formData,

        completionYear: Number(
          formData.completionYear
        ),

        order: Number(
          formData.order
        ),

        technologies:
          technologies.filter(
            Boolean
          ),

        features:
          features
            .filter(Boolean)
            .map((item) => ({
              label: item,
            })),
      };

      await createProject(
        payload as any,
        token
      );

      toast.success(
        "Project created successfully"
      );

      router.push(
        "/admin/projects"
      );
    } catch (error: any) {
      toast.error(
        error?.response?.data
          ?.message ||
          "Failed to create project"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="space-y-8">
      {/* Heading */}
      <div>
        <h1 className="text-4xl font-bold text-white">
          Create Project
        </h1>

        <p className="mt-2 text-zinc-400">
          Add a new project to
          the portfolio.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="space-y-8"
      >
        <div className="grid gap-6 md:grid-cols-2">
          {/* Title */}
          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-300">
              Project Title
            </label>

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="h-14 w-full rounded-2xl border border-white/10 bg-[#111C36] px-5 text-white outline-none"
            />
          </div>

          {/* Slug */}
          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-300">
              Slug
            </label>

            <input
              type="text"
              name="slug"
              value={formData.slug}
              onChange={handleChange}
              className="h-14 w-full rounded-2xl border border-white/10 bg-[#111C36] px-5 text-white outline-none"
            />
          </div>

          {/* Category */}
          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-300">
              Category
            </label>

            <select
              name="category"
              value={
                formData.category
              }
              onChange={handleChange}
              className="h-14 w-full rounded-2xl border border-white/10 bg-[#111C36] px-5 text-white outline-none"
            >
              <option value="">
                Select category
              </option>

              {services.map(
                (service) => (
                  <option
                    key={
                      service._id
                    }
                    value={
                      service.title
                    }
                  >
                    {
                      service.title
                    }
                  </option>
                )
              )}
            </select>
          </div>

          {/* Status */}
          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-300">
              Status
            </label>

            <select
              name="status"
              value={
                formData.status
              }
              onChange={handleChange}
              className="h-14 w-full rounded-2xl border border-white/10 bg-[#111C36] px-5 text-white outline-none"
            >
              <option value="completed">
                Completed
              </option>

              <option value="ongoing">
                Ongoing
              </option>
            </select>
          </div>

          {/* Thumbnail */}
          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium text-zinc-300">
              Thumbnail URL
            </label>

            <input
              type="text"
              name="thumbnail"
              value={
                formData.thumbnail
              }
              onChange={handleChange}
              className="h-14 w-full rounded-2xl border border-white/10 bg-[#111C36] px-5 text-white outline-none"
            />
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium text-zinc-300">
              Description
            </label>

            <textarea
              rows={6}
              name="description"
              value={
                formData.description
              }
              onChange={handleChange}
              className="w-full rounded-2xl border border-white/10 bg-[#111C36] p-5 text-white outline-none"
            />
          </div>
        </div>

        {/* Features */}
        <div className="rounded-3xl border border-white/10 bg-[#111C36] p-6">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">
              Features
            </h2>

            <button
              type="button"
              onClick={addFeature}
              className="flex items-center gap-2 rounded-xl bg-[#D69A2D] px-4 py-2 text-sm font-medium text-black"
            >
              <Plus size={16} />

              Add
            </button>
          </div>

          <div className="space-y-4">
            {features.map(
              (
                feature,
                index
              ) => (
                <div
                  key={index}
                  className="flex gap-3"
                >
                  <input
                    type="text"
                    value={feature}
                    onChange={(
                      e
                    ) =>
                      handleFeatureChange(
                        index,
                        e.target
                          .value
                      )
                    }
                    placeholder="Feature"
                    className="h-14 flex-1 rounded-2xl border border-white/10 bg-[#182544] px-5 text-white outline-none"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      removeFeature(
                        index
                      )
                    }
                    className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/15 text-red-400"
                  >
                    <Trash2
                      size={18}
                    />
                  </button>
                </div>
              )
            )}
          </div>
        </div>

        {/* Technologies */}
        <div className="rounded-3xl border border-white/10 bg-[#111C36] p-6">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">
              Technologies
            </h2>

            <button
              type="button"
              onClick={
                addTechnology
              }
              className="flex items-center gap-2 rounded-xl bg-[#D69A2D] px-4 py-2 text-sm font-medium text-black"
            >
              <Plus size={16} />

              Add
            </button>
          </div>

          <div className="space-y-4">
            {technologies.map(
              (
                technology,
                index
              ) => (
                <div
                  key={index}
                  className="flex gap-3"
                >
                  <input
                    type="text"
                    value={
                      technology
                    }
                    onChange={(
                      e
                    ) =>
                      handleTechnologyChange(
                        index,
                        e.target
                          .value
                      )
                    }
                    placeholder="Technology"
                    className="h-14 flex-1 rounded-2xl border border-white/10 bg-[#182544] px-5 text-white outline-none"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      removeTechnology(
                        index
                      )
                    }
                    className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/15 text-red-400"
                  >
                    <Trash2
                      size={18}
                    />
                  </button>
                </div>
              )
            )}
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="h-14 rounded-2xl bg-[#D69A2D] px-8 font-semibold text-black transition hover:opacity-90"
        >
          {loading
            ? "Creating..."
            : "Create Project"}
        </button>
      </form>
    </section>
  );
}