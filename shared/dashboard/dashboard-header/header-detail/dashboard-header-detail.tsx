import React from "react"
import DashboardHeaderSettingButton from "../header-button/dashboard-header-setting-button"
import DashboardHeaderInviteButton from "../header-button/dashboard-header-invite-button"
import DashboardHeaderMembers from "../header-members/dashboard-header-members"
import { useRouterQuery } from "@common/hooks"
import { Member } from "@common/types"

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
