import { PropsWithChildren } from "react"
import classes from "./dashboard-layout.module.css"

export default function DashboardLayout(props: PropsWithChildren) {
  return <main className={classes["dashboard-layout"]}>{props.children}</main>
}
