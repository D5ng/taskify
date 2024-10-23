import Link from "next/link"
import Image from "next/image"
import { useAuthStore } from "@common/hooks"
import { Dashboard } from "@shared/dashboard/types"
import classes from "./dashboard-list-item.module.css"

interface Props {
  dashboard: Dashboard
}

export default function DashboardListItem(props: Props) {
  const myUserId = useAuthStore.use.id()
  const isAdmin = props.dashboard.userId === myUserId
  return (
    <li>
      <Link href={`/dashboard/${props.dashboard.id}`} className={classes["dashboard-list-item"]}>
        <span
          className={classes["dashboard-list-color-chip"]}
          style={{ backgroundColor: props.dashboard.color }}
        ></span>
        <span className={classes["dashboard-list-item__title"]}>
          {props.dashboard.title}
          {isAdmin && <Image src="/images/icons/crown.svg" alt="" width={20} height={16} />}
        </span>
        <div className={classes["dashboard-list-item__image"]}>
          <Image src="/images/icons/arrow-right.svg" alt="" fill />
        </div>
      </Link>
    </li>
  )
}
