import { DashboardSidebarAddButton } from "@dashboard/components/dashboard-sidebar"
import classes from "./dashboard-sidebar-header.module.css"

export default function DashboardSideBarHeader() {
  return (
    <div className={classes["side-header"]}>
      <span className={classes["side-header-title"]}>Dash Boards</span>
      <DashboardSidebarAddButton />
    </div>
  )
}
