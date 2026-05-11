import { axiosInstance } from "./axios";

// =======================
// GET ALL SERVICES
// =======================

export const getServices = async () => {
  const response = await axiosInstance.get(
    "/services"
  );

  return Array.isArray(response.data) ? response.data : response.data.data;
};

// =======================
// GET SINGLE SERVICE
// =======================

export const getSingleService =
  async (slug: string) => {
    const response =
      await axiosInstance.get(
        `/services/${slug}`
      );

    return response.data;
  };

// =======================
// CREATE SERVICE
// =======================

export const createService = async (
  payload: FormData,
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

// =======================
// UPDATE SERVICE
// =======================

export const updateService = async (
  id: string,
  payload: FormData,
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

// =======================
// DELETE SERVICE
// =======================

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