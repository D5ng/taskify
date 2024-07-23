import { useFetchDashboardColumns } from "@features/dashboard/dashboard-column/hooks"
import DashboardColumnListItem from "../column-list-item/dashboard-column-list-item"

export default function DashboardColumnList() {
  const dashboardColumnsQuery = useFetchDashboardColumns()
  return dashboardColumnsQuery.data!.data.map((column) => <DashboardColumnListItem {...column} key={column.id} />)
}
