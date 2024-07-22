import React, { PropsWithChildren } from "react"
import classes from "./modal.module.css"

interface HeaderProps extends PropsWithChildren {
  renderKebab?: JSX.Element
  renderClose?: JSX.Element
  renderTitle: JSX.Element
}

export default function Header(props: HeaderProps) {
  return (
    <div className={classes.header}>
      {props.renderTitle}
      <div className={classes["header-utils"]}>
        {props.renderKebab}
        {props.renderClose}
      </div>
    </div>
  )
}
