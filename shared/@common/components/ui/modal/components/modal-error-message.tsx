import { ReactNode } from "react"
import classes from "../modal.module.css"

interface Props {
  children: ReactNode
}

export default function ErrorMessage(props: Props) {
  return <p className={classes["error-message"]}>{props.children}</p>
}
