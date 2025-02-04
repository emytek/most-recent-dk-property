import { SUCCESS } from "../../data/data";
import axiosInstance from "../AxiosInstance";

export async function getTotalNoOfPropertiesByLocationAPI(
  payload: TotalNoOfPropertiesByLocationPayload
) {
  try {
    const url = `productdescription/category/location`;
    const { data } =
      await axiosInstance.post<TotalNoOfPropertiesByLocationResponse>(
        url,
        payload
      );
    if (data?.responseDto?.code === SUCCESS) {
      return data;
    }
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function searchPropertiesAPI(payload: SearchPropertiesPayload) {
  try {
    const url = `productdescription/search`;
    const { data } = await axiosInstance.post<SearchPropertiesResponse>(
      url,
      payload
    );
    if (data?.responseDto?.code === SUCCESS) {
      return data;
    }
  } catch (error) {
    return Promise.reject(error);
  }
}


