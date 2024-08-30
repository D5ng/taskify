import { ChangeEventHandler, FocusEventHandler } from "react"

interface Options {
  isFormReset?: boolean
  isSuccessTouchedReset?: boolean
}

export interface UseFormProps<T> {
  defaultValues: T
  validate: (values: T) => { [key in keyof T]?: string }
  options?: Options
}

export type FailedFn<T> = (error: Partial<T>) => void

export type FormFields = Record<string, any>

export type FieldElement = HTMLInputElement | HTMLTextAreaElement

export type SubmitHandler<T> = (values: T) => void | Promise<any>

export type SetError<T> = (error: Partial<T>) => void

export type FormRegister = (field: string) => {
  value: string
  onBlur: FocusEventHandler<FieldElement>
  onChange: ChangeEventHandler<FieldElement>
}
