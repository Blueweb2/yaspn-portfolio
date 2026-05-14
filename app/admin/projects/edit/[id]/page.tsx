"use client";

import { useEffect, useState } from "react";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

import { toast } from "sonner";

import {
  Plus,
  Trash2,
} from "lucide-react";

import {
  getProjects,
  updateProject,
} from "@/services/project.api";

import { getServices } from "@/services/service.api";
import { IProject } from "@/types/project.types";

interface IService {
  _id: string;
  title: string;
}

export default function EditProjectPage() {
  const router = useRouter();

  const params = useParams();

  const id = String(params.id);

  const [loading, setLoading] =
    useState(false);

  const [pageLoading, setPageLoading] =
    useState(true);

  const [services, setServices] =
    useState<IService[]>([]);

  const [features, setFeatures] =
    useState<string[]>([]);

  const [technologies, setTechnologies] =
    useState<string[]>([]);

  const [thumbnailFile, setThumbnailFile] =
    useState<File | null>(null);

  const [thumbnailPreview, setThumbnailPreview] =
    useState("");

  const [formData, setFormData] =
    useState<{
      title: string;
      slug: string;
      description: string;
      thumbnail: string;
      category: string;
      location: string;
      client: string;
      completionYear: string;
      status: "completed" | "ongoing";
      liveLink: string;
      order: number;
    }>({
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
    const fetchData = async () => {
      try {
        const [
          servicesRes,
          projectsRes,
        ] = await Promise.all([
          getServices(),
          getProjects(),
        ]);

        setServices(servicesRes);

        const project = projectsRes.find(
          (item: IProject) =>
            item._id === id
        );

        if (!project) {
          return toast.error(
            "Project not found"
          );
        }

        setFormData({
          title: project.title || "",

          slug: project.slug || "",

          description:
            project.description || "",

          thumbnail:
            project.thumbnail || "",

          category:
            project.category || "",

          location:
            project.location || "",

          client:
            project.client || "",

          completionYear: String(
            project.completionYear || ""
          ),

          status:
            project.status ||
            "completed",

          liveLink:
            project.liveLink || "",

          order:
            project.order || 0,
        });

        // =========================
        // THUMBNAIL PREVIEW
        // =========================

        setThumbnailPreview(
          project.thumbnail || ""
        );

        // =========================
        // FEATURES
        // =========================

        setFeatures(
          project.features?.map(
            (item: {
              label: string;
            }) => item.label
          ) || []
        );

        // =========================
        // TECHNOLOGIES
        // =========================

        setTechnologies(
          project.technologies || []
        );
      } catch (error) {
        console.log(error);

        toast.error(
          "Failed to fetch project"
        );
      } finally {
        setPageLoading(false);
      }
    };

    fetchData();
  }, [id]);

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

      const formDataToSend = new FormData();

      formDataToSend.append(
        "title",
        formData.title
      );
      formDataToSend.append(
        "slug",
        formData.slug
      );
      formDataToSend.append(
        "description",
        formData.description
      );
      if (thumbnailFile) {
        formDataToSend.append(
          "thumbnail",
          thumbnailFile
        );
      }
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
        "order",
        String(formData.order)
      );
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
            .map((item) => ({ label: item }))
        )
      );

      await updateProject(
        id,
        formDataToSend,
        token
      );

      toast.success(
        "Project updated successfully"
      );

      router.push(
        "/admin/projects"
      );
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
        "Failed to update project"
      );
    } finally {
      setLoading(false);
    }
  };

  if (pageLoading) {
    return (
      <div className="text-white">
        Loading...
      </div>
    );
  }

  return (
    <section className="space-y-8">
      {/* Heading */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-4xl font-bold text-white">
            Edit Project
          </h1>

          <p className="mt-2 text-zinc-400">
            Update project details.
          </p>
        </div>

        <Link
          href="/admin/projects"
          className="rounded-2xl border border-white/10 bg-[#111C36] px-5 py-3 text-sm font-medium text-white transition hover:bg-white/5"
        >
          Back to projects
        </Link>
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
              required
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
              required
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
              required
              name="category"
              value={
                formData.category
              }
              onChange={handleChange}
              className="h-14 w-full rounded-2xl border border-white/10 bg-[#111C36] px-5 text-white outline-none"
            >
              <option value="">Select category</option>

              {services.map(
                (service) => (
                  <option
                    key={service._id}
                    value={service.title}
                  >
                    {service.title}
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
          {/* Thumbnail Upload */}
          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium text-zinc-300">
              Thumbnail
            </label>

            <input
              type="file"
              accept="image/*"
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
                <img
                  src={thumbnailPreview}
                  alt="Thumbnail Preview"
                  className="h-full w-full object-cover"
                />
              </div>
            )}
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium text-zinc-300">
              Description
            </label>

            <textarea
              required
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
            ? "Updating..."
            : "Update Project"}
        </button>
      </form>
    </section>
  );
}
