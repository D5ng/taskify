import useSWR from "swr"
import { DashboardApiInstance } from "@shared/dashboard/services"
import { useRouterQuery } from "@common/hooks"

export function useFetchDashboards(page: number) {
  const fetcher = () => DashboardApiInstance.fetchDashboard(page)
  return useSWR(`dashboards?navigationMethod=pagination&page=${page}&size=5`, fetcher)
}

export function useFetchDashboard(dashboardId: number) {
  const fetcher = () => DashboardApiInstance.fetchDashboardDetail(dashboardId)
  return useSWR(`dashboards/${dashboardId}`, fetcher)
}

export function useFetchInvitation(currentPage: number) {
  const dashboardId = useRouterQuery("id")
  const fetcher = (url: string) => DashboardApiInstance.fetchInvitation(url)
  return useSWR(`dashboards/${dashboardId}/invitations?page=${currentPage}&size=5`, fetcher)
}
