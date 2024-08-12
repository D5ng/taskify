export interface UseFormProps<T> {
  defaultValues: T
  validate: (values: T) => Partial<T>
  onSubmit: (values: T) => void | Promise<void>
}

export type FormFields = Record<string, any>
