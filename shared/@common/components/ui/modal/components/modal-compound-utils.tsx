import { PropsWithChildren } from "react"
import classes from "../index.module.css"

export default function Utils(props: PropsWithChildren) {
  return <div className={classes.utils}>{props.children}</div>
}
