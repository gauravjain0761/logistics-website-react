import axios from "axios";
// config
import { HOST_API_KEY } from "./config-global";
import { Router } from "next/router";

// ----------------------------------------------------------------------

const axiosInstance = axios.create({ baseURL: HOST_API_KEY });

axiosInstance.interceptors.response.use(
  async (response) => response,
  async (error) => {
    const { response } = error;
    console.log("response 401", response);
    if (response.status == 401) {
      Router.push("/auth/login");
    }
    return Promise.reject((error && error) || "Something went wrong");
  }
);

export default axiosInstance;
