import { Pagination } from "@common/components/ui"
import { useFetchDashboards, useDashboardPageStore } from "@shared/dashboard/hooks"
import { DASHBAORD_POST_COUNT } from "@shared/dashboard/constants"

export default function DashboardListPagination() {
  const currentPage = useDashboardPageStore.use.currentPage()
  const setCurrentPage = useDashboardPageStore.use.setCurrentPage()
  const dashboardsQuery = useFetchDashboards(1)

  const maxPage = Math.ceil((dashboardsQuery.data?.totalCount || 1) / DASHBAORD_POST_COUNT)

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
