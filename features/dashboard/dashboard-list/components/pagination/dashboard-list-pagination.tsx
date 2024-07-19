import Pagination from "@common/components/ui/pagination"
import { useFetchDashboards } from "@common/hooks/queries"
import { DASHBAORD_POST_COUNT } from "@common/constants"
import { useDashboardPageStore } from "@common/hooks/store"

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
