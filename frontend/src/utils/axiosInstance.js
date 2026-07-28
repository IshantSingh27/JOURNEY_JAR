import axios from "axios"

export const BASE_URL = "https://journey-jar-backend.onrender.com/api"

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
})

export default axiosInstance