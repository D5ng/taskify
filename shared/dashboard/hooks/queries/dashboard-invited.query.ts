import useSWR from "swr"
import { InvitedDashboardAPI } from "@shared/dashboard/services"
import useSWRInfinite from "swr/infinite"
import { InvitedDashboardResponse } from "../../types"

const getKey = (pageIndex: number, previousPageData: InvitedDashboardResponse) => {
  console.log(pageIndex, previousPageData)
  if (previousPageData && !previousPageData.invitations.length) return null // 끝에 도달
  if (pageIndex === 0) return `invitations?size=5`
  // console.log(previousPageData)
  return `invitations?size=5&cursorId=${previousPageData.cursorId}`
}

export function useFetchInvitedDashboard() {
  return useSWRInfinite(getKey, InvitedDashboardAPI.fetchInvitedDashboard)
}
