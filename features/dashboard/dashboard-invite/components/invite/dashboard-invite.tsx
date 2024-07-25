import DashboardEditTemplate from "@/shared/dashboard/components/dashboard-layout/dashboard-edit-layout"

import {
  DashboardInviteList,
  DashboardInviteSkeleton,
  DashboardInviteButton,
  InvitePagination,
} from "@/features/dashboard/dashboard-invite/components"

import Suspensive from "@/shared/@common/components/suspensive"
import { useFetchInvitation, useInvitePageStore } from "@/shared/dashboard/hooks"

export default function DashboardInvite() {
  const currentPage = useInvitePageStore.use.currentPage()
  const invitationQuery = useFetchInvitation(currentPage)

  return (
    <DashboardEditTemplate
      title="초대 내역"
      name="이메일"
      renderList={
        <Suspensive isLoading={invitationQuery.isLoading} fallback={<DashboardInviteSkeleton />}>
          <DashboardInviteList />
        </Suspensive>
      }
      renderPagination={<InvitePagination />}
      renderInviteButton={<DashboardInviteButton />}
    />
  )
}
