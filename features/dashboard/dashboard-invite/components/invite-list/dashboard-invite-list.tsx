import { useFetchInvitation, useInvitePageStore } from "@shared/dashboard/hooks"
import { DashboardInviteListItem } from "@features/dashboard/dashboard-invite/components"
import classes from "./dashboard-invite-list.module.css"

interface Props {
  isPermission: boolean
}

export default function DashboardInviteList(props: Props) {
  const currentPage = useInvitePageStore.use.currentPage()
  const invitationQuery = useFetchInvitation(currentPage, props.isPermission)

  if (!props.isPermission) return <p className={classes["not-permission"]}>대시보드 초대 조회 권한이 없습니다.</p>

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
