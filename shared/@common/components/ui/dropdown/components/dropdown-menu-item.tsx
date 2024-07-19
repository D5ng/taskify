import React, { HTMLAttributes, PropsWithChildren } from "react"
import { useDropdownContext } from "@common/components/ui/dropdown"
import classes from "../dropdown.module.css"

interface Props extends PropsWithChildren, HTMLAttributes<HTMLLIElement> {
  onClick?: () => void
}

export default function DropdownMenuItem(props: Props) {
  return (
    <li className={`${classes["dropdown-list__item"]} ${props.className}`} onClick={props.onClick}>
      {props.children}
    </li>
  )
}
