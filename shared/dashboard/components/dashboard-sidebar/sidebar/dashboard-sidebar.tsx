import {
  DashboardSideBarHeader,
  DashboardSideBarList,
  DashboardSideBarLogo,
  ErrorBoundary,
  SidebarErrorFallback,
} from "@shared/dashboard/components"

import classes from "./dashboard-sidebar.module.css"
import { useDashboardPageStore, useFetchDashboards } from "@shared/dashboard/hooks"

export default function DashboardSideBar() {
  const currentPage = useDashboardPageStore.use.currentPage()
  const dashboardsQuery = useFetchDashboards(currentPage)
  const handleRefetch = () => dashboardsQuery.mutate()

  return (
    <aside className={classes["sidebar"]}>
      <div className={classes["sidebar-wrapper"]}>
        <DashboardSideBarLogo />
      </div>
      <div className={classes["sidebar-wrapper"]}>
        <DashboardSideBarHeader />
      </div>
      <ErrorBoundary fallback={SidebarErrorFallback} onReset={handleRefetch}>
        <DashboardSideBarList />
      </ErrorBoundary>
    </aside>
  )
}
