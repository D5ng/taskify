import { Suspensive } from "@common/components"
import { useDashboardPageStore, useFetchDashboards } from "@shared/dashboard/hooks"
import {
  DashboardListFetcherLayout,
  DashboardSidebarListItem,
  DashboardSidebarSkeleton,
} from "@shared/dashboard/components"
import classes from "./dashboard-sidebar-list.module.css"

export default function DashboardSideBarList() {
  const currentPage = useDashboardPageStore.use.currentPage()
  const dashboardsQuery = useFetchDashboards(currentPage)

  if (dashboardsQuery.error) throw dashboardsQuery.error

  return (
    <ul className={classes["list"]}>
      <Suspensive isLoading={dashboardsQuery.isLoading} fallback={<DashboardSidebarSkeleton />}>
        <DashboardListFetcherLayout
          renderComponents={(dashboard) => <DashboardSidebarListItem dashboard={dashboard} key={dashboard.id} />}
        />
      </Suspensive>
    </ul>
  )
}
