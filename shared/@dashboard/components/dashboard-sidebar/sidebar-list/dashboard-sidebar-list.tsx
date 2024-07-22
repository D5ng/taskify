import Suspensive from "@common/components/suspensive"
import { useDashboardPageStore } from "@common/hooks"
import { useFetchDashboards } from "@dashboard/hooks/queries"
import { DashboardListFetcherLayout } from "@dashboard/components/dashboard-layout"
import { DashboardSidebarListItem, DashboardSidebarSkeleton } from "@dashboard/components/dashboard-sidebar"
import classes from "./dashboard-sidebar-list.module.css"

export default function DashboardSideBarList() {
  const currentPage = useDashboardPageStore.use.currentPage()
  const dashboardsQuery = useFetchDashboards(currentPage)

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
