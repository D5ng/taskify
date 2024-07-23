import Link from "next/link"
import Image from "next/image"
import classes from "./dashboard-list-item.module.css"
import { Dashboard } from "@shared/dashboard/types"

interface Props {
  dashboard: Dashboard
}

export default function DashboardListItem(props: Props) {
  return (
    <li>
      <Link href={`/dashboard/${props.dashboard.id}`} className={classes["dashboard-list-item"]}>
        <span
          className={classes["dashboard-list-color-chip"]}
          style={{ backgroundColor: props.dashboard.color }}
        ></span>
        <span className={classes["dashboard-list-item__title"]}>{props.dashboard.title}</span>
        <div className={classes["dashboard-list-item__image"]}>
          <Image src="/images/icons/arrow-right.svg" alt="" fill />
        </div>
      </Link>
    </li>
  )
}
