import { DashboardListFetcherLayout } from "@dashboard/dashboard-layout"
import {
  DashboardListAddButton,
  DashboardListSkeleton,
  DashboardListItem,
  DashboardListPagination,
} from "@features/dashboard/dashboard-list/components"
import Suspensive from "@common/components/suspensive"
import { useFetchDashboards } from "@common/hooks/queries"
import { useDashboardPageStore } from "@common/hooks"
import classes from "./dashboard-list.module.css"

export default function DashboardList() {
  const currentPage = useDashboardPageStore.use.currentPage()
  const dashboardsQuery = useFetchDashboards(currentPage)

  return (
    <section className={`${classes["dashboard-list"]} dashboard-inner-layout`}>
      <ul className={classes["dashboard-layout"]}>
        <DashboardListAddButton />
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
