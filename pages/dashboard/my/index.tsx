import { DashboardLayout, DashboardHeader, DashboardSideBar } from "@shared/dashboard/components"
import { DashboardList } from "@features/dashboard/dashboard-list/components"
import { DashboardInvited } from "@features/dashboard/dashboard-invited/components"

export default function MyDashboard() {
  return (
    <>
      <DashboardHeader />
      <DashboardLayout>
        <DashboardList />
        <DashboardInvited />
      </DashboardLayout>
      <DashboardSideBar />
    </>
  )
}
