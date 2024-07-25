import { DashboardEditLayout } from "@shared/dashboard/components"
import {
  DashboardMemberList,
  DashboardMemberSkeleton,
  MemberPagination,
} from "@features/dashboard/dashboard-members/components"

import { useRouterQuery } from "@common/hooks"
import Suspensive from "@common/components/suspensive"
import { useFetchMembers, useMemberPageStore } from "@shared/dashboard/hooks"

interface Props {
  dashboardId: number
}

export default function DashboardMember(props: Props) {
  const dashboardId = useRouterQuery("id")
  const currentPage = useMemberPageStore.use.currentPage()
  const membersQuery = useFetchMembers(+dashboardId, currentPage)

  return (
    <DashboardEditLayout
      title="구성원"
      name="이름"
      renderList={
        <Suspensive isLoading={membersQuery.isLoading} fallback={<DashboardMemberSkeleton />}>
          <DashboardMemberList />
        </Suspensive>
      }
      renderPagination={<MemberPagination />}
    />
  )
}
