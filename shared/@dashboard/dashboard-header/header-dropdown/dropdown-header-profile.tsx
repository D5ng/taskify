import React from "react"
import Dropdown from "@common/components/ui/dropdown"
import classes from "./dropdown-header-profile.module.css"

interface Props {
  isToggle: boolean
  onCloseToggle: () => void
  onOpenToggle: () => void
}

export default function DropdownHeaderProfile(props: Props) {
  const targetValidation = (target: Element) => !!target.closest("button")
  return (
    props.isToggle && (
      <Dropdown
        isToggle={props.isToggle}
        onCloseToggle={props.onCloseToggle}
        onOpenToggle={props.onOpenToggle}
        className={classes["header-profile"]}
        callback={targetValidation}
      >
        <Dropdown.Menu>
          <Dropdown.MenuItem>관리</Dropdown.MenuItem>
          <Dropdown.MenuItem>마이 페이지</Dropdown.MenuItem>
        </Dropdown.Menu>
      </Dropdown>
    )
  )
}
