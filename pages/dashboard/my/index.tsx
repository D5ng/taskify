import { DashboardList } from "@features/dashboard/dashboard-list/components"
import { DashboardLayout } from "@dashboard/components/dashboard-layout"
import { DashboardHeader } from "@dashboard/components/dashboard-header"

export default function MyDashboard() {
  return (
    <>
      <DashboardHeader />
      <DashboardLayout>
        <DashboardList />
      </DashboardLayout>
    </>
  )
}
