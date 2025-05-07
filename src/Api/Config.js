import axios from "axios";
export const baseURL = "https://assignment-d7ya.onrender.com";
export const apiURL = {
  baseURL,
  login: "auth/login",
  register: "auth/register",
};
const Axios = axios.create({ baseURL });
export const apiPost = async (url, formData) => {
  try {
    const token = localStorage.getItem("User")
      ? JSON.parse(localStorage.getItem("User"))?.token
      : undefined;

    const apikey = localStorage.getItem("User")
      ? JSON.parse(localStorage.getItem("User"))?.apikey
      : undefined;
    const { data } = await Axios.post(url, formData, {
      headers: {
        apikey,
        token,
      },
    })
    return data;
  } catch (error) {
    return {
      s: 0,
      m: error?.message,
    };
  }
};

export const apiGet = async (url, params) => {
  try {
    const token = localStorage.getItem("uk-med")
      ? JSON.parse(localStorage.getItem("uk-med"))?.token
      : undefined;

    const apikey = localStorage.getItem("uk-med")
      ? JSON.parse(localStorage.getItem("uk-med"))?.apikey
      : undefined;

    const { data } = await Axios.get(url, {
      params: params,
      headers: {
        token,
        apikey,
      },
    });
    return data;
  } catch (error) {
    return {
      s: 0,
      m: error?.message,
    };
  }
};
