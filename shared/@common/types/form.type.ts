export interface UseFormProps<T> {
  defaultValues: T
  validate: (values: T) => { [key in keyof T]?: string }
}

export type FailedFn<T> = (error: Partial<T>) => void

export type FormFields = Record<string, any>

export type FieldElement = HTMLInputElement | HTMLTextAreaElement

export type SubmitHandler<T> = (values: T) => void | Promise<any>

export type SetError<T> = (error: Partial<T>) => void
