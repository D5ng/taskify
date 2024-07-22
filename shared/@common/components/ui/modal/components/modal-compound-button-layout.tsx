import { PropsWithChildren } from "react"
import classes from "./modal.module.css"

export default function ButtonLayout(props: PropsWithChildren) {
  return <div className={classes["button-layout"]}>{props.children}</div>
}
