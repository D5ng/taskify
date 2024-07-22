import { useDashboardPageStore } from "@common/hooks"
import { useFetchDashboards } from "@common/hooks/queries"
import type { Dashboard } from "@common/types"

interface Props {
  renderComponents: (dashboardsQuery: Dashboard) => JSX.Element
}

export default function DashboardListFetcherLayout(props: Props) {
  const currentPage = useDashboardPageStore.use.currentPage()
  const dashboardsQuery = useFetchDashboards(currentPage)

  return dashboardsQuery.data!.dashboards.map((dashboard) => props.renderComponents(dashboard))
}
