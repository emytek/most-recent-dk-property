import { SUCCESS } from "../../data/data";
import { getUserToken } from "../../utils/GetUserDetails";
import axiosInstance from "../AxiosInstance";

export async function contactUsApi(payload: ContactUsPayload) {
  try {
    const url = `contact/add`;
    const token = getUserToken();
    if (token) {
      const { data } = await axiosInstance.post<ContactUsResponse>(
        url,
        payload
      );
      if (data?.responseDto?.code === SUCCESS) {
        return data;
      }
    } else {
      window.location.href = "/login";
    }
  } catch (error) {
    return Promise.reject(error);
  }
}
