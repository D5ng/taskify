import { Dashboard } from "@shared/dashboard/types"
import Suspensive from "@shared/@common/components/suspensive"
import { useFetchDashboard } from "@shared/dashboard/hooks"
import DashboardEditForm from "../edit-form/dashboard-edit-form"

interface Props {
  dashboard: Dashboard
}

export default function DashboardEdit(props: Props) {
  const dashboardQuery = useFetchDashboard(props.dashboard.id)

  return (
    <Suspensive fallback={<p>로딩중</p>} isLoading={dashboardQuery.isLoading}>
      <DashboardEditForm dashboardId={props.dashboard.id} />
    </Suspensive>
  )
}
