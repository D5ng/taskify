import React, { PropsWithChildren } from "react"
import { useDropdownContext } from "@common/components/ui/dropdown"
import classes from "../dropdown.module.css"

export default function DropdownMenu(props: PropsWithChildren) {
  const dropdownContext = useDropdownContext()
  if (!dropdownContext.isToggle) return null

  return <ul className={classes["dropdown-list"]}>{props.children}</ul>
}
