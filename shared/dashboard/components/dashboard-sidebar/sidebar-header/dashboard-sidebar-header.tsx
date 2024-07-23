import { DashboardSidebarAddButton } from "@shared/dashboard/components"
import classes from "./dashboard-sidebar-header.module.css"

export default function DashboardSideBarHeader() {
  return (
    <div className={classes["side-header"]}>
      <span className={classes["side-header-title"]}>Dash Boards</span>
      <DashboardSidebarAddButton />
    </div>
  )
}
