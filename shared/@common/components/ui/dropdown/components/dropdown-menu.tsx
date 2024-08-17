import React, { HTMLAttributes, PropsWithChildren, ReactNode } from "react"
import { useDropdownContext } from "../dropdown"
import classes from "../dropdown.module.css"

interface Props {
  children: ReactNode
  size?: "inherit"
}

export default function DropdownMenu(props: Props) {
  const dropdownContext = useDropdownContext()
  if (!dropdownContext.isToggle) return null

  const className = props.size
    ? `${classes["dropdown-menu-inherit"]} ${classes["dropdown-menu"]}`
    : `${classes["dropdown-menu"]}`

  return <ul className={className}>{props.children}</ul>
}
