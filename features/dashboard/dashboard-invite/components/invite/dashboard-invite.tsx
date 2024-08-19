import { Suspensive } from "@common/components"
import { DashboardEditLayout } from "@shared/dashboard/components/dashboard-layout"
import { useFetchInvitation, useInvitePageStore } from "@shared/dashboard/hooks"
import {
  DashboardInviteList,
  DashboardInviteSkeleton,
  DashboardInviteButton,
  InvitePagination,
} from "@features/dashboard/dashboard-invite/components"

export default function DashboardInvite() {
  const currentPage = useInvitePageStore.use.currentPage()
  const invitationQuery = useFetchInvitation(currentPage)

  return (
    <DashboardEditLayout
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
