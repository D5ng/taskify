import { Invite } from "@shared/dashboard/types"
import { useDeleteInvitation, useInvitePageStore } from "@shared/dashboard/hooks"
import { Button } from "@common/components/ui/button"
import classes from "./dashboard-invite-list-item.module.css"

export default function DashboardInviteListItem(props: Invite) {
  const currentPage = useInvitePageStore.use.currentPage()
  const deleteInvitationMutation = useDeleteInvitation(currentPage, props.id)

  const handleDeleteInvitation = async () => {
    await deleteInvitationMutation.trigger()
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
