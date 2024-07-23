import { DashboardColumnList, DashboardColumnSkeleton } from "@/features/dashboard-detail/dashboard-column/components"
import Suspensive from "@common/components/suspensive"
import { useFetchDashboardColumns } from "@shared/dashboard/hooks"
import classes from "./dashboard-column.module.css"

export default function DashboardColumn() {
  const dashboardColumnsQuery = useFetchDashboardColumns()

  return (
    <div className={classes["column-layout"]}>
      <Suspensive isLoading={dashboardColumnsQuery.isLoading} fallback={<DashboardColumnSkeleton />}>
        <DashboardColumnList />
      </Suspensive>
    </div>
  )
}
