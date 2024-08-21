import { Button } from "@common/components/ui"
import { useUpdateInvitedDashboard } from "@/shared/dashboard/hooks"
import type { InvitedDashboard } from "@/shared/dashboard/types"
import classes from "./dashboard-invited-list-item.module.css"

export default function DashboardInvitedListItem(props: InvitedDashboard) {
  const inviteMutation = useUpdateInvitedDashboard(props.id)

  const inviteAccept = () => inviteMutation.trigger({ inviteAccepted: true })
  const inviteRefuse = () => inviteMutation.trigger({ inviteAccepted: false })

  return (
    <li className={classes["invite-list__item"]}>
      <span>{props.dashboard.title}</span>
      <span>{props.inviter.nickname}</span>
      <span className={classes["invite-list__button"]}>
        <Button
          disabled={false}
          isLoading={inviteMutation.isMutating}
          buttonStyle="primary"
          size="small"
          onClick={inviteAccept}
        >
          수락
        </Button>
        <Button
          disabled={false}
          isLoading={inviteMutation.isMutating}
          buttonStyle="outline"
          size="small"
          onClick={inviteRefuse}
        >
          거절
        </Button>
      </span>
    </li>
  )
}
