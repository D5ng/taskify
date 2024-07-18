import { Member } from "@shared/common/types"
import { ChangeEvent, InputHTMLAttributes, KeyboardEvent, PropsWithChildren } from "react"

export interface InputStates extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean
  isValid?: boolean
  inputValue: string
  previewImageUrl?: string | null
  isToggle?: boolean
  disabled?: boolean
  handleInputValueChange?: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  handleInputBlur?: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  handleKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void
  handleKeyUp?: (event: KeyboardEvent<HTMLInputElement>) => void
  handleUpload?: (event: ChangeEvent<HTMLInputElement>) => void
  handleCloseToggle?: () => void
  handleToggle?: () => void
  handleSelectedItem?: <T extends Member>(selectedItem: T) => void
  handleInputReset?: () => void
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

export interface FormControlContextValues extends PropsWithChildren {
  value: InputStates & { type: string; id: string }
}

export interface FormControlContextProps extends FormControlStates {
  id: string
  type: string
}
