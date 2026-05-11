import { axiosInstance } from "./axios";

export const getProjects = async () => {
  const response = await axiosInstance.get(
    "/projects"
  );

  return Array.isArray(response.data) ? response.data : response.data.data;
};

export const getFeaturedProjects =
  async () => {
    const response =
      await axiosInstance.get(
        "/projects/featured"
      );

    return Array.isArray(response.data) ? response.data : response.data.data;
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
  payload: FormData | Record<string, unknown>,
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