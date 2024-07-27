import useSWR from "swr"
import { AuthApiInstance } from "@common/services"

export function useFetchProfile() {
  return useSWR("users/me", AuthApiInstance.fetchProfile)
}
