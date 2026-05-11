"use client";

import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import { toast } from "sonner";

import { Plus, Trash2 } from "lucide-react";

import { createProject } from "@/services/project.api";
import { getServices } from "@/services/service.api";
import Image from "next/image";

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
  const [thumbnailFile, setThumbnailFile] =
    useState<File | null>(null);

  const [thumbnailPreview, setThumbnailPreview] =
    useState("");

  const [galleryFiles, setGalleryFiles] =
    useState<File[]>([]);

  const [galleryPreview, setGalleryPreview] =
    useState<string[]>([]);

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

      status: "completed" as
        | "completed"
        | "ongoing",

      liveLink: "",

      featured: false,

      order: 0,
    });

  useEffect(() => {
    const fetchServices =
      async () => {
        try {
          const res =
            await getServices();

          setServices(res);
        } catch {
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

    const token = localStorage.getItem("token");

    if (!token) {
      return toast.error("Unauthorized");
    }

    try {
      setLoading(true);

      const formDataToSend =
        new FormData();

      // =========================
      // BASIC FIELDS
      // =========================

      formDataToSend.append(
        "title",
        formData.title
      );

      formDataToSend.append(
        "description",
        formData.description
      );

      formDataToSend.append(
        "category",
        formData.category
      );

      formDataToSend.append(
        "location",
        formData.location
      );

      formDataToSend.append(
        "client",
        formData.client
      );

      formDataToSend.append(
        "completionYear",
        String(formData.completionYear)
      );

      formDataToSend.append(
        "status",
        formData.status
      );

      formDataToSend.append(
        "liveLink",
        formData.liveLink
      );

      formDataToSend.append(
        "featured",
        String(formData.featured)
      );

      formDataToSend.append(
        "order",
        String(formData.order)
      );

      // =========================
      // ARRAYS
      // =========================

      formDataToSend.append(
        "technologies",
        JSON.stringify(
          technologies.filter(Boolean)
        )
      );

      formDataToSend.append(
        "features",
        JSON.stringify(
          features
            .filter(Boolean)
            .map((item) => ({
              label: item,
            }))
        )
      );

      // =========================
      // THUMBNAIL
      // =========================

      if (thumbnailFile) {
        formDataToSend.append(
          "thumbnail",
          thumbnailFile
        );
      }

      // =========================
      // GALLERY
      // =========================

      galleryFiles.forEach((file) => {
        formDataToSend.append(
          "gallery",
          file
        );
      });

      // =========================
      // API CALL
      // =========================

      await createProject(
        formDataToSend,
        token
      );

      toast.success(
        "Project created successfully",
        {
          style: {
            backgroundColor: "#0f5132",
            color: "#d1e7dd",
          },
        }
      );

      router.push("/admin/projects");
    } catch (error: unknown) {
      const err = error as {
        response?: {
          data?: {
            message?: string;
          };
        };
      };

      toast.error(
        err.response?.data?.message ||
        "Failed to create project",
        {
          style: {
            backgroundColor: "#842029",
            color: "#f8d7da",
          },
        }
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
          Add a new project to the portfolio.
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
              required
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
              value={formData.category}
              onChange={handleChange}
              required
              className="h-14 w-full rounded-2xl border border-white/10 bg-[#111C36] px-5 text-white outline-none"
            >
              <option value="">
                Select category
              </option>

              {services.map((service) => (
                <option
                  key={service._id}
                  value={service.title}
                >
                  {service.title}
                </option>
              ))}
            </select>
          </div>

          {/* Status */}
          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-300">
              Status
            </label>

            <select
              name="status"
              value={formData.status}
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

          {/* Completion Year */}
          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-300">
              Completion Year
            </label>

            <input
              type="number"
              name="completionYear"
              value={formData.completionYear}
              onChange={handleChange}
              className="h-14 w-full rounded-2xl border border-white/10 bg-[#111C36] px-5 text-white outline-none"
            />
          </div>

          {/* Client */}
          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-300">
              Client
            </label>

            <input
              type="text"
              name="client"
              value={formData.client}
              onChange={handleChange}
              className="h-14 w-full rounded-2xl border border-white/10 bg-[#111C36] px-5 text-white outline-none"
            />
          </div>

          {/* Location */}
          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-300">
              Location
            </label>

            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="h-14 w-full rounded-2xl border border-white/10 bg-[#111C36] px-5 text-white outline-none"
            />
          </div>

          {/* Live Link */}
          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium text-zinc-300">
              Live Link
            </label>

            <input
              type="text"
              name="liveLink"
              value={formData.liveLink}
              onChange={handleChange}
              placeholder="https://example.com"
              className="h-14 w-full rounded-2xl border border-white/10 bg-[#111C36] px-5 text-white outline-none"
            />
          </div>

          {/* Featured */}
          <div className="md:col-span-2 flex items-center gap-3 rounded-2xl border border-white/10 bg-[#111C36] p-5">
            <input
              type="checkbox"
              checked={formData.featured}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  featured: e.target.checked,
                })
              }
              className="h-5 w-5"
            />

            <label className="text-sm font-medium text-zinc-300">
              Featured Project
            </label>
          </div>

          {/* Thumbnail Upload */}
          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium text-zinc-300">
              Thumbnail
            </label>

            <input
              type="file"
              accept="image/*"
              required
              onChange={(e) => {
                const file =
                  e.target.files?.[0] || null;

                setThumbnailFile(file);

                if (file) {
                  setThumbnailPreview(
                    URL.createObjectURL(file)
                  );
                }
              }}
              className="block w-full rounded-2xl border border-white/10 bg-[#111C36] p-4 text-white"
            />

            {thumbnailPreview && (
              <div className="relative mt-5 h-60 w-full overflow-hidden rounded-2xl">
                <Image
                  src={thumbnailPreview}
                  alt="Thumbnail Preview"
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </div>

          {/* Gallery Upload */}
          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium text-zinc-300">
              Gallery Images
            </label>

            <input
              type="file"
              multiple
              accept="image/*"
              onChange={(e) => {
                const files = Array.from(
                  e.target.files || []
                );

                setGalleryFiles(files);

                const previews = files.map(
                  (file) =>
                    URL.createObjectURL(file)
                );

                setGalleryPreview(previews);
              }}
              className="block w-full rounded-2xl border border-white/10 bg-[#111C36] p-4 text-white"
            />

            {galleryPreview.length > 0 && (
              <div className="mt-5 grid grid-cols-2 gap-4 md:grid-cols-4">
                {galleryPreview.map(
                  (image, index) => (
                    <div
                      key={index}
                      className="relative h-40 overflow-hidden rounded-2xl"
                    >
                      <Image
                        src={image}
                        alt="Gallery"
                        fill
                        className="object-cover"
                      />
                    </div>
                  )
                )}
              </div>
            )}
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium text-zinc-300">
              Description
            </label>

            <textarea
              rows={6}
              name="description"
              value={formData.description}
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
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex gap-3"
              >
                <input
                  type="text"
                  value={feature}
                  onChange={(e) =>
                    handleFeatureChange(
                      index,
                      e.target.value
                    )
                  }
                  placeholder="Feature"
                  className="h-14 flex-1 rounded-2xl border border-white/10 bg-[#182544] px-5 text-white outline-none"
                />

                <button
                  type="button"
                  onClick={() =>
                    removeFeature(index)
                  }
                  className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/15 text-red-400"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
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
              onClick={addTechnology}
              className="flex items-center gap-2 rounded-xl bg-[#D69A2D] px-4 py-2 text-sm font-medium text-black"
            >
              <Plus size={16} />
              Add
            </button>
          </div>

          <div className="space-y-4">
            {technologies.map(
              (technology, index) => (
                <div
                  key={index}
                  className="flex gap-3"
                >
                  <input
                    type="text"
                    value={technology}
                    onChange={(e) =>
                      handleTechnologyChange(
                        index,
                        e.target.value
                      )
                    }
                    placeholder="Technology"
                    className="h-14 flex-1 rounded-2xl border border-white/10 bg-[#182544] px-5 text-white outline-none"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      removeTechnology(index)
                    }
                    className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/15 text-red-400"
                  >
                    <Trash2 size={18} />
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
          className="h-14 rounded-2xl bg-[#D69A2D] px-8 font-semibold text-black transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading
            ? "Creating..."
            : "Create Project"}
        </button>
      </form>
    </section>
  );
}