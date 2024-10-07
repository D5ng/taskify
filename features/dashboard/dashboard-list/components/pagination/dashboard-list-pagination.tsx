import { Pagination } from "@common/components/ui"
import { useFetchDashboards, useDashboardPageStore } from "@shared/dashboard/hooks"
import { DASHBAORD_POST_COUNT } from "@features/dashboard/dashboard-list/constants"
import { useEffect, useState } from "react"

export default function DashboardListPagination() {
  // const [isClient, setIsClient] = useState(false)
  // const [currentPage, setCurrentPage] = useState(1)
  const currentPage = useDashboardPageStore.use.currentPage()
  const setCurrentPage = useDashboardPageStore.use.setCurrentPage()
  // const dashboardsQuery = useFetchDashboards(currentPage)
  // const maxPage = Math.ceil((dashboardsQuery.data?.totalCount || 1) / DASHBAORD_POST_COUNT)

  // useEffect(() => {
  //   setIsClient(true)
  // }, [])

  // if (!isClient) return null

  return (
    <Pagination value={{ maxPage: 3, currentPage, setCurrentPage }}>
      <Pagination.Count />
      <Pagination.ButtonLayout>
        <Pagination.Prev />
        <Pagination.Next />
      </Pagination.ButtonLayout>
    </Pagination>
  )
}
