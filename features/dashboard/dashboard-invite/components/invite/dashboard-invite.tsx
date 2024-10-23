import { Suspensive } from "@common/components"
import { DashboardEditLayout } from "@shared/dashboard/components/dashboard-layout"
import { useFetchInvitation, useInvitePageStore } from "@shared/dashboard/hooks"
import {
  DashboardInviteList,
  DashboardInviteSkeleton,
  DashboardInviteButton,
  InvitePagination,
} from "@features/dashboard/dashboard-invite/components"
import { Dashboard } from "@/shared/dashboard/types"
import { useAuthStore } from "@/shared/@common/hooks"

interface Props {
  dashboard: Dashboard
}

export default function DashboardInvite(props: Props) {
  const currentPage = useInvitePageStore.use.currentPage()
  const userId = useAuthStore.use.id()
  const isInvitationPermission = props.dashboard.userId === userId
  const invitationQuery = useFetchInvitation(currentPage, isInvitationPermission)

  return (
    <DashboardEditLayout
      title="초대 내역"
      name={isInvitationPermission ? "이메일" : ""}
      renderList={
        <Suspensive isLoading={invitationQuery.isLoading} fallback={<DashboardInviteSkeleton />}>
          <DashboardInviteList isPermission={isInvitationPermission} />
        </Suspensive>
      }
      renderPagination={<InvitePagination isPermission={isInvitationPermission} />}
      renderInviteButton={<DashboardInviteButton />}
    />
  )
}
