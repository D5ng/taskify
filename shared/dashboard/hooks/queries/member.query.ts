import { MemberApiInstance } from "@/shared/dashboard/services"
import useSWR from "swr"

export function useFetchMembers(dashboardId: number, currentPage: number = 0) {
  return useSWR(`members?dashboardId=${dashboardId}&page=${currentPage}`, MemberApiInstance.getMembers)
}
