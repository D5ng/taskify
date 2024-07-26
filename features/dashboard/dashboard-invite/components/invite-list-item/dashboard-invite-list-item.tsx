import { Invite } from "@shared/dashboard/types"
import { useDeleteInvitation, useFetchInvitation, useInvitePageStore } from "@shared/dashboard/hooks"
import { INVITE_POST_COUNT } from "@features/dashboard/dashboard-invite/constants"
import { Button } from "@common/components/ui/button"
import classes from "./dashboard-invite-list-item.module.css"

export default function DashboardInviteListItem(props: Invite) {
  const currentPage = useInvitePageStore.use.currentPage()
  const setCurrentPage = useInvitePageStore.use.setCurrentPage()
  const invitationQuery = useFetchInvitation(currentPage)
  const deleteInvitationMutation = useDeleteInvitation(currentPage, props.id)

  const handleDeleteInvitation = async () => {
    await deleteInvitationMutation.trigger()
    const maxPage = Math.ceil(invitationQuery.data!.totalCount / (INVITE_POST_COUNT + 1))
    setCurrentPage(maxPage)
  }

  return (
    <div className={classes["list-layout"]}>
      <span>{props.invitee.email}</span>
      <div>
        <Button
          buttonStyle="secondary"
          size="small"
          onClick={handleDeleteInvitation}
          isLoading={deleteInvitationMutation.isMutating}
        >
          취소
        </Button>
      </div>
    </div>
  )
}
