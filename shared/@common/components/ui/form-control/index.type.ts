import {
  ChangeEvent,
  ChangeEventHandler,
  FocusEventHandler,
  InputHTMLAttributes,
  KeyboardEvent,
  ReactNode,
} from "react"

export interface InputStates<T = any> extends InputHTMLAttributes<HTMLInputElement> {
  isValid?: boolean
  previewImageUrl?: string | null
  isToggle?: boolean
  disabled?: boolean
  handleKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void
  handleKeyUp?: (event: KeyboardEvent<HTMLInputElement>) => void
  handleUpload?: (event: ChangeEvent<HTMLInputElement>) => void
  handleCloseToggle?: () => void
  handleToggle?: () => void
  handleInputReset?: () => void
  handleClick?: (value: T) => void
  errorMessage?: string
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  onBlur?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>
}

export interface UploadStates {
  isLoading: boolean
  previewImageUrl: string | null
  handleUpload: (event: ChangeEvent<HTMLInputElement>) => void
}

export type FormControlStates = {
  type: string
  id: string
} & InputStates

export interface FormControlContextValues {
  hasError: (field: string) => string
  children: ReactNode
  type: string
  id: string
}

export interface FormControlContextProps extends FormControlStates {
  id: string
  type: string
}
