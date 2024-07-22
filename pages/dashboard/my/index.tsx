import { DashboardLayout } from "@dashboard/components/dashboard-layout"
import { DashboardHeader } from "@dashboard/components/dashboard-header"
import { DashboardSideBar } from "@dashboard/components/dashboard-sidebar"
import { DashboardList } from "@features/dashboard/dashboard-list/components"

export default function MyDashboard() {
  return (
    <>
      <DashboardHeader />
      <DashboardLayout>
        <DashboardList />
      </DashboardLayout>
      <DashboardSideBar />
    </>
  )
}
