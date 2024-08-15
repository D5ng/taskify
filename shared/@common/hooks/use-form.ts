import { useState, FocusEventHandler, ChangeEventHandler, useEffect, useCallback, FormEvent } from "react"
import { UseFormProps, FormFields, FieldElement, SubmitHandler } from "@common/types"

export default function useForm<T extends FormFields>({ defaultValues, validate }: UseFormProps<T>) {
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

  const handleSubmit = (onSubmit: SubmitHandler<T>) => async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (hasFormError) return
    setIsSubmitting(true)

    try {
      const result = await onSubmit(formValues)
      return result
    } catch (error) {
      throw new Error("알 수 없는 에러가 발생했어요")
    } finally {
      setIsSubmitting(false)
    }
  }

  return {
    formStates: {
      formValues,
      isSubmitting,
      hasFormError,
      touchedFields,
    },
    register,
    handleSubmit,
    hasError,
    handleSetError,
  }
}
