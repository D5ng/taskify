import { useRouterQuery } from "@common/hooks"
import { useFetchMembers, useMemberPageStore } from "@shared/dashboard/hooks"
import { DashboardMemberListItem } from "@features/dashboard/dashboard-members/components"
import type { Dashboard } from "@shared/dashboard/types"
import classes from "./dashboard-member-list.module.css"

interface Props {
  dashboard: Dashboard
}

export default function DashboardMemberList(props: Props) {
  const dashboardId = useRouterQuery("id")
  const currentPage = useMemberPageStore.use.currentPage()
  const memberQuery = useFetchMembers(+dashboardId, currentPage)

  return (
    <ul className={classes.list}>
      {memberQuery.data?.members.map((member) => (
        <li className={classes["list-item"]} key={member.id}>
          <DashboardMemberListItem {...member} dashboardUserId={props.dashboard.userId} />
        </li>
      ))}
    </ul>
  )
}
