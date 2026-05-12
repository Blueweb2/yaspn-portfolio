import { axiosInstance } from "./axios";

export const sendContactMessage =
  async (payload: unknown) => {
    const response =
      await axiosInstance.post(
        "/contact",
        payload
      );

    return response.data;
  };