import { DashboardMemberListItem } from "@/features/dashboard/dashboard-members/components"
import { useFetchMembers } from "@features/dashboard/dashboard-members/hooks"
import { useRouterQuery } from "@/shared/@common/hooks"
import { useMemberPageStore } from "@/shared/dashboard/hooks"
import classes from "./dashboard-member-list.module.css"

export default function DashboardMemberList() {
  const dashboardId = useRouterQuery("id")
  const currentPage = useMemberPageStore.use.currentPage()
  const memberQuery = useFetchMembers(+dashboardId, currentPage)

  return (
    <ul className={classes.list}>
      {memberQuery.data?.members.map((member) => (
        <li className={classes["list-item"]} key={member.id}>
          <DashboardMemberListItem {...member} />
        </li>
      ))}
    </ul>
  )
}
