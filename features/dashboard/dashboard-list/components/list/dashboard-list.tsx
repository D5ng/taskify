import { Suspensive } from "@common/components"
import { DashboardListFetcherLayout } from "@shared/dashboard/components"
import { useFetchDashboards, useDashboardPageStore } from "@shared/dashboard/hooks"
import { DashboardCreateButton } from "@features/dashboard/dashboard-create/components"
import { DashboardListSkeleton, DashboardListItem } from "@features/dashboard/dashboard-list/components"

import classes from "./dashboard-list.module.css"

export default function DashboardList() {
  const currentPage = useDashboardPageStore.use.currentPage()
  const dashboardsQuery = useFetchDashboards(currentPage)

  if (dashboardsQuery.error) throw dashboardsQuery.error

  return (
    <ul className={classes["dashboard-layout"]}>
      <DashboardCreateButton />
      <Suspensive isLoading={dashboardsQuery.isLoading} fallback={<DashboardListSkeleton />}>
        <DashboardListFetcherLayout
          renderComponents={(dashboard) => <DashboardListItem dashboard={dashboard} key={dashboard.id} />}
        />
      </Suspensive>
    </ul>
  )
}
