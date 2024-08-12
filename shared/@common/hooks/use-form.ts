import { useState, FocusEventHandler, ChangeEventHandler, useEffect, useCallback, FormEvent } from "react"
import { UseFormProps, FormFields } from "@common/types"

export default function useForm<T extends FormFields>({ defaultValues, validate, onSubmit }: UseFormProps<T>) {
  const [formValues, setFormValues] = useState(defaultValues)
  const [touchedFields, setTouchedFields] = useState<Partial<T>>({})
  const [errors, setErrors] = useState<Partial<T>>({})

  const isFormError = Object.values(errors).some((error) => !!error)

  const handleSetError = (error: Partial<T>) => {
    setErrors((prevState) => ({ ...prevState, ...error }))
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (isFormError) return

    try {
      const result = await onSubmit(formValues)
      return result
    } catch (err) {
      const error = err as Partial<T>
      handleSetError(error)
    }
  }

  const handleBlur: FocusEventHandler<HTMLInputElement> = (event) =>
    setTouchedFields((prevState) => ({
      ...prevState,
      [event.target.name]: true,
    }))

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) =>
    setFormValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }))

  const register = (field: string) => {
    const value = formValues[field]
    return {
      value,
      onBlur: handleBlur,
      onChange: handleChange,
    }
  }

  const hasError = (field: string) => ((touchedFields[field] && errors[field]) || "") as string

  const runValidator = useCallback(() => validate(formValues), [validate, formValues])

  useEffect(() => {
    const errors = runValidator()
    setErrors(errors)
  }, [runValidator, formValues])

  return {
    formValues,
    errors,
    touchedFields,
    register,
    handleSubmit,
    handleSetError,
    isFormError,
    hasError,
  }
}
