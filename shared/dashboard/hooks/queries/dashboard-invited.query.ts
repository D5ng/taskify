import useSWR from "swr"
import useSWRInfinite from "swr/infinite"
import { InvitedDashboardAPI } from "@shared/dashboard/services"
import { InvitedDashboardResponse } from "@shared/dashboard/types"

const getKey = (pageIndex: number, previousPageData: InvitedDashboardResponse) => {
  if (previousPageData && !previousPageData.cursorId) return null
  if (pageIndex === 0) return `invitations?size=5`
  return `invitations?size=5&cursorId=${previousPageData.cursorId}`
}

export function useFetchInvitedDashboard() {
  const invitesQuery = useSWRInfinite(getKey, InvitedDashboardAPI.fetchInvitedDashboard)
  const lastPage = invitesQuery.data?.[invitesQuery.data?.length - 1]

  return { ...invitesQuery, lastPage }
}

export function useSearchInvitedDashboard(title: string) {
  const key = title ? `invitations?size=5&title=${title}` : null
  return useSWR(key, InvitedDashboardAPI.fetchInvitedDashboard)
}
