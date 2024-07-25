import React from "react"
import classes from "./status.module.css"

interface StatusProps {
  name: string
}

export default function Status(props: StatusProps) {
  return (
    <div className={classes.status}>
      <div className={classes["status-badge"]}></div>
      <div>{props.name}</div>
    </div>
  )
}
