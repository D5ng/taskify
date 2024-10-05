import { FormEvent, PropsWithChildren } from "react"

export interface ModalContextStates {
  title?: string
  outlineButtonTitle?: string
  isLoading?: boolean
  isDisabled?: boolean
  onCloseModal: () => void
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void
}

export type ModalContextProps = {}

export interface ModalContextValues extends PropsWithChildren {
  value: ModalContextStates
  defaultSize?: boolean
}
