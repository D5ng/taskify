import {
  DashboardHeaderSettingButton,
  DashboardHeaderInviteButton,
  DashboardHeaderMembers,
} from "@dashboard/dashboard-header"
import { useRouterQuery } from "@common/hooks"
import type { Member } from "@common/types"

interface Props {
  members: Member[]
  className: string
}

export default function DashboardHeaderDetail(props: Props) {
  const id = useRouterQuery("id")

  return (
    <>
      <div className={props.className}>
        <DashboardHeaderSettingButton dashboardId={+id} />
        <DashboardHeaderInviteButton />
      </div>
      <DashboardHeaderMembers members={props.members} />
    </>
  )
}
