import {
  DashboardMyPagePassword,
  DashboardMyPageProfile,
} from "@features/dashboard/dashboard-account-management/components"
import { GoBack } from "@/shared/@common/components/go-back"
import {
  DashboardHeader,
  DashboardLayout,
  DashboardSectionLayout,
  DashboardSideBar,
} from "@/shared/dashboard/components"

export default function MyPage() {
  return (
    <>
      <DashboardHeader />
      <DashboardLayout>
        <GoBack />
        <DashboardSectionLayout>
          <DashboardMyPageProfile />
        </DashboardSectionLayout>
        <DashboardSectionLayout>
          <DashboardMyPagePassword />
        </DashboardSectionLayout>
      </DashboardLayout>
      <DashboardSideBar />
    </>
  )
}
