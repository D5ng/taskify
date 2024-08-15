// import { Member } from "@shared/common/types"
import { ChangeEvent, FocusEvent, InputHTMLAttributes, KeyboardEvent, PropsWithChildren, ReactNode } from "react"

export interface InputStates<T = any> extends InputHTMLAttributes<HTMLInputElement> {
  // hasError?: string
  // errorMessage: string
  isValid?: boolean
  // inputValue: T
  previewImageUrl?: string | null
  isToggle?: boolean
  disabled?: boolean
  // handleInputValueChange?: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  // handleInputBlur?: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
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
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  onBlur: (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void
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
