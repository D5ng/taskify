import useSWR from "swr"
import { DashboardApiInstance } from "@shared/dashboard/services"
import { useRouterQuery } from "@common/hooks"

export function useFetchDashboards(page: number) {
  return useSWR(`dashboards123?navigationMethod=pagination&page=${page}&size=5`, DashboardApiInstance.fetchDashboard)
}

export function useFetchDashboard(dashboardId: number) {
  const fetcher = () => DashboardApiInstance.fetchDashboardDetail(dashboardId)
  return useSWR(`dashboards/${dashboardId}`, fetcher)
}

export function useFetchInvitation(currentPage: number, isPermission?: boolean) {
  const dashboardId = useRouterQuery("id")
  const fetcher = (url: string) => DashboardApiInstance.fetchInvitation(url)
  const key = isPermission ? `dashboards/${dashboardId}/invitations?page=${currentPage}&size=5` : null
  return useSWR(key, fetcher)
}

export function useFetchAllInvitaion() {
  const dashboardId = useRouterQuery("id")
  const fetcher = (url: string) => DashboardApiInstance.fetchInvitation(url)
  return useSWR(`dashboards/${dashboardId}/invitations?size=50`, fetcher)
}
