import React, { createContext, useContext } from "react"
import * as Components from "./components"
import { useOutside } from "@common/hooks"
import { DropdownContextType, DropdownType } from "./index.type"
import classes from "./index.module.css"

export const DropdownContext = createContext<DropdownContextType>({
  isToggle: false,
  onCloseToggle: () => {},
  onOpenToggle: () => {},
})

export function useDropdownContext() {
  const dropdownContext = useContext(DropdownContext)
  if (!dropdownContext) throw new Error("Dropdown Context에서 사용해주세요.")
  return dropdownContext
}

export default function Dropdown(props: DropdownType) {
  const ref = useOutside<HTMLDivElement>({ onCloseToggle: props.onCloseToggle, callback: props.callback })
  return (
    <DropdownContext.Provider value={{ ...props }}>
      <div className={`${classes["dropdown-root"]} ${props.className ? props.className : ""}`} ref={ref}>
        {props.children}
      </div>
    </DropdownContext.Provider>
  )
}

Dropdown.Menu = Components.Menu
Dropdown.MenuItem = Components.MenuItem
Dropdown.Trigger = Components.Trigger
