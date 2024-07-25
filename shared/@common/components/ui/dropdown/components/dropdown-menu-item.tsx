import React, { HTMLAttributes, PropsWithChildren } from "react"
import { useDropdownContext } from "@common/components/ui/dropdown"
import classes from "../index.module.css"

interface Props extends PropsWithChildren, HTMLAttributes<HTMLLIElement> {
  onClick?: () => void
}

export default function DropdownMenuItem(props: Props) {
  const dropdownContext = useDropdownContext()
  const handleClick = () => {
    props.onClick && props.onClick()
    dropdownContext.onCloseToggle()
  }

  return (
    <li className={`${classes["dropdown-menu__item"]} ${props.className}`} onClick={handleClick}>
      {props.children}
    </li>
  )
}
