import axios from "axios"

// const BASE_URL = "http://localhost:3000/api"
export const BASE_URL = "https://journey-jar-back.onrender.com/api"

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
})

export default axiosInstance