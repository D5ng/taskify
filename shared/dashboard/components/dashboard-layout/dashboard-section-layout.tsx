import { PropsWithChildren } from "react"
import classes from "./dashboard-section-layout.module.css"

interface DashboardSectionLayoutProps extends PropsWithChildren {
  layout?: "members" | "invitation"
}

export default function DashboardSectionLayout(props: DashboardSectionLayoutProps) {
  const className = `${classes.layout} ${props.layout ? classes[props.layout] : ""}`
  return <div className={className}>{props.children}</div>
}
