import Link from "next/link"
import { Dashboard } from "@common/types"
import classes from "./dashboard-sidebar-list-item.module.css"

interface DashboardSidebarListItemProps {
  dashboard: Dashboard
}

export default function DashboardSidebarListItem(props: DashboardSidebarListItemProps) {
  const backgroundColor = { backgroundColor: props.dashboard.color }
  return (
    <li className={classes["sidebar-list-item"]}>
      <Link href={`/dashboard/${props.dashboard.id}`}>
        <div className={classes["color-chip"]} style={backgroundColor}></div>
        <p className={classes["title"]}>{props.dashboard.title}</p>
      </Link>
    </li>
  )
}
