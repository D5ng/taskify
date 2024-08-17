import { PropsWithChildren } from "react"
import classes from "../pagination.module.css"

export default function ButtonLayout(props: PropsWithChildren) {
  return <div className={classes["flex-layout"]}>{props.children}</div>
}
