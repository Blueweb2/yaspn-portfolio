import { axiosInstance } from "./axios";

export const getDashboardStats =
  async () => {
    const res =
      await axiosInstance.get(
        "/dashboard/stats"
      );

    return res.data.data;
  };

export const getLatestProjects =
  async () => {
    const res =
      await axiosInstance.get(
        "/projects/latest"
      );

    return res.data.data;
  };