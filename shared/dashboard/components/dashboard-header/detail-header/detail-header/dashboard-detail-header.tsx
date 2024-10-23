import { PropsWithChildren } from "react"
import Image from "next/image"
import { useAuthStore } from "@common/hooks"
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
  const myUserId = useAuthStore.use.id()
  const isAdmin = props.dashboard.userId === myUserId

  return (
    <header className={classes.header}>
      <div className={classes["header-layout"]}>
        <h2 className={classes["header-title"]}>
          {title}
          {isAdmin && <Image src="/images/icons/crown.svg" alt="" width={20} height={16} />}
        </h2>
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
