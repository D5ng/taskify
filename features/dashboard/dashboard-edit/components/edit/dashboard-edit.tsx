import { Dashboard } from "@shared/dashboard/types"
import Suspensive from "@shared/@common/components/suspensive"
import { useFetchDashboard } from "@shared/dashboard/hooks"
import { DashboardEditForm, DashboardEditformSkeleton } from "@features/dashboard/dashboard-edit/components"

interface Props {
  dashboard: Dashboard
}

export default function DashboardEdit(props: Props) {
  const dashboardQuery = useFetchDashboard(props.dashboard.id)

  return (
    <Suspensive fallback={<DashboardEditformSkeleton />} isLoading={dashboardQuery.isLoading}>
      <DashboardEditForm dashboardId={props.dashboard.id} />
    </Suspensive>
  )
}
