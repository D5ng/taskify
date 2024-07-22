import {
  DashboardSideBarHeader,
  DashboardSideBarList,
  DashboardSideBarLogo,
} from "@dashboard/components/dashboard-sidebar"

import classes from "./dashboard-sidebar.module.css"

export default function DashboardSideBar() {
  return (
    <aside className={classes["sidebar"]}>
      <div className={classes["sidebar-wrapper"]}>
        <DashboardSideBarLogo />
      </div>
      <div className={classes["sidebar-wrapper"]}>
        <DashboardSideBarHeader />
      </div>
      <DashboardSideBarList />
    </aside>
  )
}
