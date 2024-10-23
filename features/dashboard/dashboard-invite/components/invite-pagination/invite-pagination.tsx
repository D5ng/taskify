import { Pagination } from "@common/components/ui"
import { useFetchInvitation, useInvitePageStore } from "@shared/dashboard/hooks"
import { INVITE_POST_COUNT } from "@features/dashboard/dashboard-invite/constants"

interface Props {
  isPermission: boolean
}

export default function InvitePagination(props: Props) {
  const currentPage = useInvitePageStore.use.currentPage()
  const setCurrentPage = useInvitePageStore.use.setCurrentPage()
  const invitationQuery = useFetchInvitation(currentPage, true)
  const maxPage = Math.ceil((invitationQuery.data?.totalCount || 1) / INVITE_POST_COUNT)

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
