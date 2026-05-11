import { axiosInstance } from "./axios";

import { IProject } from "@/types/project.types";

export const getProjects = async () => {
  const response = await axiosInstance.get(
    "/projects"
  );

  return response.data;
};

export const getFeaturedProjects =
  async () => {
    const response =
      await axiosInstance.get(
        "/projects/featured"
      );

    return response.data;
  };

export const getSingleProject =
  async (slug: string) => {
    const response =
      await axiosInstance.get(
        `/projects/${slug}`
      );

    return response.data;
  };

export const createProject = async (
  payload: FormData,
  token: string
) => {
  const response = await axiosInstance.post(
    "/projects",
    payload,
    {
      headers: {
        Authorization: token,
      },
    }
  );

  return response.data;
};

export const updateProject = async (
  id: string,
  payload: FormData,
  token: string
) => {
  const response =
    await axiosInstance.patch(
      `/projects/${id}`,
      payload,
      {
        headers: {
          Authorization: token,
        },
      }
    );

  return response.data;
};

export const deleteProject = async (
  id: string,
  token: string
) => {
  const response =
    await axiosInstance.delete(
      `/projects/${id}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );

  return response.data;
};