import axios from "axios";

export const API = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export const apiServices = async ({
  method = "get",
  url = "",
  headers = {},
  data = null,
}) => {
  try {
    const res = await API({
      method,
      url: `${url}`,
      data,
      headers,
    });
    return res.data;
  } catch (err) {
    return err?.response?.data || { success: false };
  }
};
