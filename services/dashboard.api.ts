import { axiosInstance } from "./axios";

export const getDashboardStats =
  async () => {
    const res =
      await axiosInstance.get(
        "/dashboard/stats"
      );

    return res.data.data || {};
  };

export const getLatestProjects =
  async () => {
    const res =
      await axiosInstance.get(
        "/dashboard/latest-projects"
      );

    return Array.isArray(res.data.data) ? res.data.data : [];
  };