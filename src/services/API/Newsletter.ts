import { SUCCESS } from "../../data/data";
import axiosInstance from "../AxiosInstance";

export async function newsletterAPI(payload: NewsletterPayload) {
  try {
    const url = `subscription/subcribe`;
    const { data } = await axiosInstance.post<NewsletterResponse>(url, payload);
    if (data?.responseDto?.code === SUCCESS) {
      return data;
    }
  } catch (error) {
    return Promise.reject(error);
  }
}
