import { HTMLAttributes, PropsWithChildren, ReactNode } from "react"

export type DropdownListItem = { title: string; type: string }

export interface DropdownContextType {
  isToggle: boolean
  onCloseToggle: () => void
  onOpenToggle: () => void
}

export interface DropdownProvider extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  className?: string
  callback?: (target: Element) => boolean
}
