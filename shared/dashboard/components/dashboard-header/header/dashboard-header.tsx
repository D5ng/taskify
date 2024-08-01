import Link from "next/link"
import { DashboardHeaderProfile } from "@shared/dashboard/components"
import type { Dashboard, Member } from "@shared/dashboard/types"
import DashboardHeaderDetail from "../header-detail/dashboard-header-detail"
import { useDashboardStore } from "@/shared/dashboard/hooks"
import classes from "./dashboard-header.module.css"

interface DashboardHeaderProps {
  dashboard?: Dashboard
  members?: Member[]
}

export default function DashboardHeader(props: DashboardHeaderProps) {
  const dashboardTitle = useDashboardStore.use.title()
  return (
    <header className={classes.header}>
      <div className={classes["header-layout"]}>
        <h2 className={classes["header-title"]}>
          {props.dashboard?.title ? (
            dashboardTitle || props.dashboard.title
          ) : (
            <Link href="/dashboard/my">내 대시보드</Link>
          )}
        </h2>
        <div className={classes["flex-layout"]}>
          {props.dashboard?.id && (
            <DashboardHeaderDetail members={props.members!} className={classes["button-layout"]} />
          )}
          <div className={classes["profile-wrapper"]}>
            <DashboardHeaderProfile />
          </div>
        </div>
      </div>
    </header>
  )
}
