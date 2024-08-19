import { useFetchInvitation, useInvitePageStore } from "@shared/dashboard/hooks"
import { DashboardInviteListItem } from "@features/dashboard/dashboard-invite/components"
import classes from "./dashboard-invite-list.module.css"

export default function DashboardInviteList() {
  const currentPage = useInvitePageStore.use.currentPage()
  const invitationQuery = useFetchInvitation(currentPage)

  return (
    <ul className={classes.list}>
      {invitationQuery.data?.invitations.map((invitation) => (
        <li className={classes["list-item"]} key={invitation.id}>
          <DashboardInviteListItem {...invitation} />
        </li>
      ))}
    </ul>
  )
}
