import { PropsWithChildren } from "react"
import {
  DetailHeaderMembers,
  DetailHeaderInviteButton,
  DetailHeaderSettingButton,
} from "@shared/dashboard/components/dashboard-header/detail-header"
import { useFetchDashboard } from "@shared/dashboard/hooks"
import type { Dashboard, Member } from "@shared/dashboard/types"
import { DashboardHeaderProfile } from "@shared/dashboard/components/dashboard-header"
import classes from "./dashboard-detail-header.module.css"

interface DashboardHeaderProps extends PropsWithChildren {
  dashboard: Dashboard
  members: Member[]
}

export default function DashboardDetailHeader(props: DashboardHeaderProps) {
  const dashboardQuery = useFetchDashboard(props.dashboard.id)
  const title = dashboardQuery.data?.title || props.dashboard.title

  return (
    <header className={classes.header}>
      <div className={classes["header-layout"]}>
        <h2 className={classes["header-title"]}>{title}</h2>
        <div className={classes["flex-layout"]}>
          <div className={classes["button-layout"]}>
            <DetailHeaderSettingButton dashboardId={props.dashboard.id} />
            <DetailHeaderInviteButton />
          </div>
          <DetailHeaderMembers members={props.members} />
          <div className={classes["profile-wrapper"]}>
            <DashboardHeaderProfile />
          </div>
        </div>
      </div>
    </header>
  )
}

// dashboard-header

// dashboard-detail-header
