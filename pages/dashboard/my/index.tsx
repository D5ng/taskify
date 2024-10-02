import { DashboardLayout, DashboardHeader, DashboardSideBar, ErrorBoundary } from "@shared/dashboard/components"
import { DashboardErrorFallback, DashboardList } from "@features/dashboard/dashboard-list/components"
import { DashboardInvited } from "@features/dashboard/dashboard-invited/components"
import { useDashboardPageStore, useFetchDashboards } from "@shared/dashboard/hooks"

export default function MyDashboard() {
  const currentPage = useDashboardPageStore.use.currentPage()
  const dashboardsQuery = useFetchDashboards(currentPage)
  const handleRefetch = () => dashboardsQuery.mutate()

  return (
    <>
      <DashboardHeader />
      <DashboardLayout>
        <section className="dashboard-inner-layout">
          <ErrorBoundary onReset={handleRefetch} fallback={DashboardErrorFallback}>
            <DashboardList />
          </ErrorBoundary>
        </section>
        <DashboardInvited />
      </DashboardLayout>
      <DashboardSideBar />
    </>
  )
}
