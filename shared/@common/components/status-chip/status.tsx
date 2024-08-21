import React from "react"
import classes from "./status.module.css"

interface StatusProps {
  title: string
}

export default function Status(props: StatusProps) {
  return (
    <div className={classes.status}>
      <div className={classes["status-badge"]}></div>
      <div>{props.title}</div>
    </div>
  )
}
