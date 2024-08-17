import { PropsWithChildren } from "react"
import classes from "../modal.module.css"

export default function Description(props: PropsWithChildren) {
  return <p className={classes.description}>{props.children}</p>
}
