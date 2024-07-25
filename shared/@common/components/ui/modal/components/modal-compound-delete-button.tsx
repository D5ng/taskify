import React, { HTMLAttributes, PropsWithChildren } from "react"
import classes from "../index.module.css"

interface Props extends PropsWithChildren<HTMLAttributes<HTMLButtonElement>> {}

export default function DeleteButton(props: Props) {
  return (
    <button className={classes["delete-button"]} onClick={props.onClick} type="button">
      {props.children}
    </button>
  )
}
