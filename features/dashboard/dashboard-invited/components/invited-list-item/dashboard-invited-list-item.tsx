import { Button } from "@common/components/ui"
import { useAcceptInvite, useRefuseInvite } from "@/shared/dashboard/hooks"
import type { InvitedDashboard } from "@/shared/dashboard/types"
import classes from "./dashboard-invited-list-item.module.css"

export default function DashboardInvitedListItem(props: InvitedDashboard) {
  const acceptInviteMutation = useAcceptInvite(props.id)
  const refuseInviteMutation = useRefuseInvite(props.id)

  const inviteAccept = () => acceptInviteMutation.trigger({ inviteAccepted: true })
  const inviteRefuse = () => refuseInviteMutation.trigger({ inviteAccepted: false })

  return (
    <li className={classes["invite-list__item"]}>
      <span>{props.dashboard.title}</span>
      <span>{props.inviter.nickname}</span>
      <span className={classes["invite-list__button"]}>
        <Button isLoading={acceptInviteMutation.isMutating} buttonStyle="primary" size="small" onClick={inviteAccept}>
          수락
        </Button>
        <Button isLoading={refuseInviteMutation.isMutating} buttonStyle="outline" size="small" onClick={inviteRefuse}>
          거절
        </Button>
      </span>
    </li>
  )
}
