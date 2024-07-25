import React, { createContext, useContext } from "react"
import * as Components from "./components"
import { useOutside, useToggle } from "@common/hooks"
import { DropdownContextType, DropdownProvider } from "./index.type"
import classes from "./index.module.css"

export const DropdownContext = createContext<DropdownContextType>({
  isToggle: false,
  onOpenToggle: () => {},
  onCloseToggle: () => {},
})

export function useDropdownContext() {
  const dropdownContext = useContext(DropdownContext)
  if (!dropdownContext) throw new Error("Dropdown Context에서 사용해주세요.")
  return dropdownContext
}

export default function Dropdown(props: DropdownProvider) {
  const { isToggle, onOpenToggle, onCloseToggle } = useToggle()
  const ref = useOutside<HTMLDivElement>({ onCloseToggle, callback: props.callback })

  return (
    <DropdownContext.Provider value={{ isToggle, onOpenToggle, onCloseToggle }}>
      <div className={`${classes["dropdown-root"]} ${props.className ? props.className : ""}`} ref={ref}>
        {props.children}
      </div>
    </DropdownContext.Provider>
  )
}

Dropdown.Menu = Components.Menu
Dropdown.MenuItem = Components.MenuItem
Dropdown.Trigger = Components.Trigger
Dropdown.Select = Components.Select
