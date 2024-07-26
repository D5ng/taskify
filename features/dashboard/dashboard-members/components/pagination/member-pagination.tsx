import { DASHBAORD_POST_COUNT } from "@shared/dashboard/constants"
import { useFetchMembers, useMemberPageStore } from "@shared/dashboard/hooks"
import Pagination from "@common/components/ui/pagination"
import { useRouterQuery } from "@common/hooks"

export default function MemberPagination() {
  const dashboardId = useRouterQuery("id")
  const currentPage = useMemberPageStore.use.currentPage()
  const setCurrentPage = useMemberPageStore.use.setCurrentPage()
  const memberQuery = useFetchMembers(+dashboardId, currentPage)

  const maxPage = Math.ceil((memberQuery.data?.totalCount || 1) / DASHBAORD_POST_COUNT)

  return (
    <Pagination value={{ maxPage, currentPage, setCurrentPage }}>
      <Pagination.Count />
      <Pagination.ButtonLayout>
        <Pagination.Prev />
        <Pagination.Next />
      </Pagination.ButtonLayout>
    </Pagination>
  )
}
