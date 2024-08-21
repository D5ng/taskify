import { FormRegister } from "@/shared/@common/types"
import { InputHTMLAttributes, LabelHTMLAttributes, ReactNode, TextareaHTMLAttributes } from "react"

export interface FormControlProps {
  id: string
  type: string
  hasError?: (field: string) => string
  children: ReactNode
  className?: string
}

export type FormControlContextType = {
  id: string
  type: string
  hasError: string
}

export interface FormControlInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export interface FormControlLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  isRequired?: boolean
}

export interface FormControlTextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export interface FormControlUploadProps {
  isLoading: boolean
  previewImageUrl: string
  children: ReactNode
}

export interface FormControlComponentProps
  extends Pick<FormControlProps, "hasError">,
    Pick<InputHTMLAttributes<HTMLInputElement>, "disabled" | "value"> {
  register: FormRegister
}
