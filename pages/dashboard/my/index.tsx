import { DashboardLayout, DashboardHeader, DashboardSideBar } from "@shared/dashboard/components"
import { DashboardList } from "@features/my-dashboard/dashboard-list/components"

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
