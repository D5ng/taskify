import { useDashboardPageStore, useFetchDashboards } from "@shared/dashboard/hooks"
import type { Dashboard } from "@shared/dashboard/types"

interface Props {
  renderComponents: (dashboardsQuery: Dashboard) => JSX.Element
}

export default function DashboardListFetcherLayout(props: Props) {
  const currentPage = useDashboardPageStore.use.currentPage()
  const dashboardsQuery = useFetchDashboards(currentPage)

  return dashboardsQuery.data!.dashboards.map((dashboard) => props.renderComponents(dashboard))
}
