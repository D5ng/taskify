import { PropsWithChildren } from "react"
import classes from "../modal.module.css"

interface LayoutProps extends PropsWithChildren {
  size?: "small" | "medium"
}

export default function Contents(props: LayoutProps) {
  const className = `${classes["modal-contents"]} ${props.size ? classes[props.size] : ""}`
  return <div className={className}>{props.children}</div>
}
