import { Suspensive } from "@common/components"
import { useFetchDashboardColumns } from "@shared/dashboard/hooks"
import {
  DashboardColumnCreateButton,
  DashboardColumnList,
  DashboardColumnSkeleton,
} from "@features/dashboard/dashboard-column/components"
import classes from "./dashboard-column.module.css"

export default function DashboardColumn() {
  const dashboardColumnsQuery = useFetchDashboardColumns()

  if (dashboardColumnsQuery.error) throw dashboardColumnsQuery.error

  return (
    <div className={classes["column-layout"]}>
      <Suspensive isLoading={dashboardColumnsQuery.isLoading} fallback={<DashboardColumnSkeleton />}>
        <DashboardColumnList />
      </Suspensive>
      <DashboardColumnCreateButton />
    </div>
  )
}
