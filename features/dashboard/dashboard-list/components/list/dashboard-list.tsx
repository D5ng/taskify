import { Suspensive } from "@common/components"
import { DashboardListFetcherLayout } from "@shared/dashboard/components"
import { useFetchDashboards, useDashboardPageStore } from "@shared/dashboard/hooks"
import { DashboardCreateButton } from "@features/dashboard/dashboard-create-button/components"
import {
  DashboardListSkeleton,
  DashboardListItem,
  DashboardListPagination,
} from "@features/dashboard/dashboard-list/components"

import classes from "./dashboard-list.module.css"

export default function DashboardList() {
  const currentPage = useDashboardPageStore.use.currentPage()
  const dashboardsQuery = useFetchDashboards(currentPage)

  return (
    <section className={`${classes["dashboard-list"]} dashboard-inner-layout`}>
      <ul className={classes["dashboard-layout"]}>
        <DashboardCreateButton />
        <Suspensive isLoading={dashboardsQuery.isLoading} fallback={<DashboardListSkeleton />}>
          <DashboardListFetcherLayout
            renderComponents={(dashboard) => <DashboardListItem dashboard={dashboard} key={dashboard.id} />}
          />
        </Suspensive>
      </ul>
      <DashboardListPagination />
    </section>
  )
}
