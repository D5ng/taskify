import useSWR from "swr"
import { DashboardColumnApiInstance } from "@shared/dashboard/services"
import { useRouterQuery } from "@common/hooks"

export function useFetchDashboardColumns() {
  const dashboardId = useRouterQuery("id")
  const fetcher = (url: string) => DashboardColumnApiInstance.fetchColumn(url)
  return useSWR(`columns?dashboardId=${dashboardId!}`, fetcher)
}
