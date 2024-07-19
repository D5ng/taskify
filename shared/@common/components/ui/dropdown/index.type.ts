import { HTMLAttributes, PropsWithChildren } from "react"

export type DropdownListItem = { title: string; type: string }

export interface DropdownContextType {
  className?: string
  isToggle: boolean
  onCloseToggle: () => void
  onOpenToggle: () => void
  callback?: (target: Element) => boolean
}

export type DropdownType = PropsWithChildren<DropdownContextType> & HTMLAttributes<HTMLDivElement>
