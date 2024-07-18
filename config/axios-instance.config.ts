import axios from "axios"
import { getCookie } from "cookies-next"

const axiosInstance = axios.create({
  baseURL: "https://sp-taskify-api.vercel.app/4-3/",
})

axiosInstance.interceptors.request.use(
  (config) => {
    const cookie = getCookie("token")
    if (!cookie) return config

    const parseCookie = JSON.parse(cookie!)
    config.headers.Authorization = `Bearer ${parseCookie.accessToken}`
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default axiosInstance
