import { axiosInstance } from "./axios";

import { IService } from "@/types/service.types";

export const getServices = async () => {
  const response = await axiosInstance.get(
    "/services"
  );

  return response.data;
};

export const getSingleService =
  async (slug: string) => {
    const response =
      await axiosInstance.get(
        `/services/${slug}`
      );

    return response.data;
  };

export const createService = async (
  payload: IService,
  token: string
) => {
  const response = await axiosInstance.post(
    "/services",
    payload,
    {
      headers: {
        Authorization: token,
      },
    }
  );

  return response.data;
};

export const updateService = async (
  id: string,
  payload: Partial<IService>,
  token: string
) => {
  const response =
    await axiosInstance.patch(
      `/services/${id}`,
      payload,
      {
        headers: {
          Authorization: token,
        },
      }
    );

  return response.data;
};

export const deleteService = async (
  id: string,
  token: string
) => {
  const response =
    await axiosInstance.delete(
      `/services/${id}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );

  return response.data;
};