import { useState, FocusEventHandler, ChangeEventHandler, useEffect, useCallback, FormEvent } from "react"
import { UseFormProps, FormFields, FieldElement } from "@common/types"

export default function useForm<T extends FormFields>({ defaultValues, validate, onSubmit }: UseFormProps<T>) {
  const [formValues, setFormValues] = useState(defaultValues)
  const [touchedFields, setTouchedFields] = useState<Partial<T>>({})
  const [errors, setErrors] = useState<Partial<T>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const hasFormError = Object.values(errors).some((error) => !!error)

  const handleSetError = (error: Partial<T>) => {
    setErrors((prevState) => ({ ...prevState, ...error }))
  }

  const handleBlur: FocusEventHandler<FieldElement> = (event) => {
    setTouchedFields((prevState) => ({
      ...prevState,
      [event.target.name]: true,
    }))
  }

  const handleChange: ChangeEventHandler<FieldElement> = (event) =>
    setFormValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }))

  const register = (field: string) => {
    const value = formValues[field] as string
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

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (hasFormError) return
    setIsSubmitting(true)
    try {
      const result = await onSubmit(formValues)
      return result
    } catch (err) {
      const error = err as Partial<T>
      handleSetError(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return {
    formValues,
    touchedFields,
    errors,
    register,
    handleSubmit,
    hasFormError,
    hasError,
    isSubmitting,
  }
}
