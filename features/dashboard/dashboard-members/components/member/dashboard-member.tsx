import { Suspensive } from "@common/components"
import { DashboardEditLayout } from "@shared/dashboard/components"
import { useFetchMembers, useMemberPageStore } from "@shared/dashboard/hooks"
import type { Dashboard } from "@shared/dashboard/types"
import {
  DashboardMemberList,
  DashboardMemberSkeleton,
  MemberPagination,
} from "@features/dashboard/dashboard-members/components"

interface Props {
  dashboard: Dashboard
}

export default function DashboardMember(props: Props) {
  const currentPage = useMemberPageStore.use.currentPage()
  const membersQuery = useFetchMembers(props.dashboard.id, currentPage)

  return (
    <DashboardEditLayout
      title="구성원"
      name="이름"
      renderList={
        <Suspensive isLoading={membersQuery.isLoading} fallback={<DashboardMemberSkeleton />}>
          <DashboardMemberList {...props} />
        </Suspensive>
      }
      renderPagination={<MemberPagination />}
    />
  )
}
