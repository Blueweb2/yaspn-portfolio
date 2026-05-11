"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import {
  Pencil,
  Plus,
  Trash2,
  Loader2,
} from "lucide-react";

import {
  createService,
  deleteService,
  getServices,
  updateService,
} from "@/services/service.api";

import { IService } from "@/types/service.types";

export default function AdminServicesPage() {
  const [services, setServices] = useState<
    IService[]
  >([]);

  const [loading, setLoading] =
    useState(true);

  const [submitting, setSubmitting] =
    useState(false);


  const [editingId, setEditingId] =
    useState<string | null>(null);

  const [formData, setFormData] =
    useState<IService>({
      title: "",
      description: "",
      icon: "",
      featured: false,
      order: 0,
      isActive: true,
    });


  const [imageFile, setImageFile] =
    useState<File | null>(null);

  const [iconFile, setIconFile] =
    useState<File | null>(null);

  const [iconPreview, setIconPreview] =
    useState<string>("");

  // Replace with your auth token
  const token = "YOUR_TOKEN";

  // =========================
  // FETCH SERVICES
  // =========================

  const fetchServices = async () => {
    try {
      setLoading(true);

      const res = await getServices();

      setServices(res || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  // =========================
  // INPUT CHANGE
  // =========================

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? (
            e.target as HTMLInputElement
          ).checked
          : value,
    }));
  };

  // =========================
  // CREATE / UPDATE
  // =========================

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      setSubmitting(true);

      const formDataToSend =
        new FormData();

      // text fields
      formDataToSend.append(
        "title",
        formData.title
      );

      formDataToSend.append(
        "description",
        formData.description
      );

      formDataToSend.append(
        "featured",
        String(formData.featured)
      );

      formDataToSend.append(
        "order",
        String(formData.order || 0)
      );

      formDataToSend.append(
        "isActive",
        String(formData.isActive)
      );

      // service image
      if (imageFile) {
        formDataToSend.append(
          "image",
          imageFile
        );
      }

      // svg icon
      if (iconFile) {
        formDataToSend.append(
          "icon",
          iconFile
        );
      }

      // update
      if (editingId) {
        await updateService(
          editingId,
          formDataToSend,
          token
        );
      }

      // create
      else {
        await createService(
          formDataToSend,
          token
        );
      }

      resetForm();

      fetchServices();
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  // =========================
  // EDIT
  // =========================

  const handleEdit = (
    service: IService
  ) => {
    setEditingId(service._id || null);

    setFormData({
      title: service.title,
      description:
        service.description,
      icon: service.icon,
      featured: service.featured,
      order: service.order,
      isActive: service.isActive,
    });

    setIconPreview(
      service.icon || ""
    );

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  // =========================
  // DELETE
  // =========================

  const handleDelete = async (
    id: string
  ) => {
    const confirmDelete =
      window.confirm(
        "Are you sure you want to delete this service?"
      );

    if (!confirmDelete) return;

    try {
      await deleteService(id, token);

      fetchServices();
    } catch (error) {
      console.log(error);
    }
  };

  // =========================
  // RESET
  // =========================

  const resetForm = () => {
    setEditingId(null);

    setFormData({
      title: "",
      description: "",
      icon: "",
      featured: false,
      order: 0,
      isActive: true,
    });

    setImageFile(null);

    setIconFile(null);

    setIconPreview("");
  };

  return (
    <div className="space-y-8">
      {/* HEADER */}

      <div className="flex items-center justify-between">
        <div>
          <p className="mb-2 text-sm uppercase tracking-[4px] text-[#d69a2d]">
            Admin Panel
          </p>

          <h1 className="text-4xl font-bold text-white">
            Services
          </h1>
        </div>
      </div>

      {/* FORM */}

      <div className="rounded-3xl border border-white/10 bg-[#111827] p-8">
        <div className="mb-6 flex items-center gap-3">
          <Plus className="text-[#d69a2d]" />

          <h2 className="text-2xl font-semibold text-white">
            {editingId
              ? "Update Service"
              : "Add New Service"}
          </h2>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid gap-6"
        >
          <div className="grid gap-6 md:grid-cols-2">
            {/* TITLE */}

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Title
              </label>

              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="h-12 w-full rounded-2xl border border-white/10 bg-[#0f172a] px-4 text-white outline-none focus:border-[#d69a2d]"
              />
            </div>

            {/* ICON */}

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                SVG Icon
              </label>

              <input
                type="file"
                accept=".svg"
                onChange={(e) => {
                  const file =
                    e.target.files?.[0] || null;

                  setIconFile(file);

                  // preview
                  if (file) {
                    const previewUrl =
                      URL.createObjectURL(file);

                    setIconPreview(previewUrl);
                  }
                }}
                required={!editingId}
                className="block w-full rounded-2xl border border-white/10 bg-[#0f172a] p-3 text-white"
              />

              {/* Preview */}

              {iconPreview && (
                <div className="mt-4 flex h-24 w-24 items-center justify-center rounded-2xl border border-white/10 bg-[#0f172a] p-4">
                  <img
                    src={iconPreview}
                    alt="Icon Preview"
                    className="h-full w-full object-contain"
                  />
                </div>
              )}
            </div>
          </div>

          {/* DESCRIPTION */}

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Description
            </label>

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={5}
              required
              className="w-full rounded-2xl border border-white/10 bg-[#0f172a] p-4 text-white outline-none focus:border-[#d69a2d]"
            />
          </div>

          {/* ORDER */}

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Order
            </label>

            <input
              type="number"
              name="order"
              value={formData.order}
              onChange={handleChange}
              className="h-12 w-full rounded-2xl border border-white/10 bg-[#0f172a] px-4 text-white outline-none focus:border-[#d69a2d]"
            />
          </div>

          {/* CHECKBOXES */}

          <div className="flex flex-wrap gap-6">
            <label className="flex items-center gap-3 text-white">
              <input
                type="checkbox"
                name="featured"
                checked={formData.featured}
                onChange={handleChange}
              />

              Featured
            </label>

            <label className="flex items-center gap-3 text-white">
              <input
                type="checkbox"
                name="isActive"
                checked={formData.isActive}
                onChange={handleChange}
              />

              Active
            </label>
          </div>

          {/* BUTTONS */}

          <div className="flex gap-4">
            <button
              type="submit"
              disabled={submitting}
              className="flex items-center gap-2 rounded-2xl bg-[#d69a2d] px-6 py-3 font-semibold text-black transition hover:bg-[#e6ac3c]"
            >
              {submitting && (
                <Loader2 className="animate-spin" />
              )}

              {editingId
                ? "Update Service"
                : "Create Service"}
            </button>

            {editingId && (
              <button
                type="button"
                onClick={resetForm}
                className="rounded-2xl border border-white/10 px-6 py-3 text-white"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      {/* SERVICES LIST */}

      <div className="rounded-3xl border border-white/10 bg-[#111827] p-8">
        <h2 className="mb-6 text-2xl font-semibold text-white">
          All Services
        </h2>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="animate-spin text-white" />
          </div>
        ) : services.length === 0 ? (
          <p className="text-gray-400">
            No services found
          </p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <div
                key={service._id}
                className="rounded-3xl border border-white/10 bg-[#0f172a] p-6"
              >
                <div className="mb-5 flex items-start justify-between">
                  <div className="text-5xl">
                    <Image
                      src={service.icon || ""}
                      alt={service.title}
                      width={56}
                      height={56}
                      className="object-contain"
                    />
                  </div>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${service.isActive
                      ? "bg-green-500/10 text-green-400"
                      : "bg-red-500/10 text-red-400"
                      }`}
                  >
                    {service.isActive
                      ? "Active"
                      : "Inactive"}
                  </span>
                </div>

                <h3 className="mb-3 text-2xl font-bold text-white">
                  {service.title}
                </h3>

                <p className="mb-5 line-clamp-3 text-sm leading-7 text-gray-400">
                  {service.description}
                </p>

                <div className="mb-6 flex flex-wrap gap-3">
                  {service.featured && (
                    <span className="rounded-full bg-[#d69a2d]/10 px-3 py-1 text-xs text-[#d69a2d]">
                      Featured
                    </span>
                  )}

                  <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-white">
                    Order: {service.order}
                  </span>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() =>
                      handleEdit(service)
                    }
                    className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-[#d69a2d] px-4 py-3 font-semibold text-black"
                  >
                    <Pencil size={18} />
                    Edit
                  </button>

                  <button
                    onClick={() =>
                      handleDelete(
                        service._id!
                      )
                    }
                    className="flex h-12 w-12 items-center justify-center rounded-2xl border border-red-500/30 bg-red-500/10 text-red-400"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}