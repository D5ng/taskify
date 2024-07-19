import { DashboardList } from "@/features/dashboard/dashboard-list/components"
import { DashboardLayout } from "@dashboard/dashboard-layout"
import { DashboardHeader } from "@dashboard/dashboard-header"

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
