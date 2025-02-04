import { message } from "antd";
import { SUCCESS } from "../../data/data";
import axiosInstance from "../AxiosInstance";
import { clearAllStorages } from "../../utils/ClearStorages";

export async function loginAPI(payload: LoginPayload) {
  try {
    const url = `login/customer`;
    const { data } = await axiosInstance.post<LoginResponse>(url, payload);
    if (data?.responseDto?.code === SUCCESS) {
      return data;
    }
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function signUpAPI(payload: SignUpPayload) {
  try {
    const url = `user/add`;
    const { data } = await axiosInstance.post<SignUpResponse>(url, payload);
    if (data?.responseDto?.code === SUCCESS) {
      return data;
    }
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function logOutAPI() {
  try {
    const url = `logout`;
    const { data } = await axiosInstance.get<LogOutResponse>(url);
    if (data?.resp?.code === SUCCESS) {
      message.success(data?.resp?.message);
      clearAllStorages();
      window.location.reload();
      return data;
    }
  } catch (error) {
    return Promise.reject(error);
  }
}
