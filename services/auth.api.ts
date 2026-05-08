import { axiosInstance } from "./axios";

interface LoginPayload {
  email: string;
  password: string;
}

export const loginUser = async (
  payload: LoginPayload
) => {
  const response = await axiosInstance.post(
    "/auth/login",
    payload
  );

  return response.data;
};

export const getMe = async (
  token: string
) => {
  const response = await axiosInstance.get(
    "/users/me",
    {
      headers: {
        Authorization: token,
      },
    }
  );

  return response.data;
};