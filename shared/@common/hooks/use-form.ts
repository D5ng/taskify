import { useState, FocusEventHandler, ChangeEventHandler, useEffect, FormEvent } from "react"
import { UseFormProps, FormFields, FieldElement, SubmitHandler } from "@common/types"

export default function useForm<T extends FormFields>({ defaultValues, validate, options }: UseFormProps<T>) {
  const [formValues, setFormValues] = useState(defaultValues)
  const [touchedFields, setTouchedFields] = useState<Partial<T>>({})
  const [fieldErros, setFiledErrors] = useState<{ [key in keyof T]?: string }>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const hasFormError = Object.values(fieldErros).some((error) => !!error)

  const handleSetError = (error: Partial<T>) => {
    setFiledErrors((prevState) => ({ ...prevState, ...error }))
  }

  const handleBlur: FocusEventHandler<FieldElement> = (event) => {
    setTouchedFields((prevState) => ({
      ...prevState,
      [event.target.name]: true,
    }))
  }

  const handleTouchedReset = () => setTouchedFields({})

  const handleChange: ChangeEventHandler<FieldElement> = (event) =>
    setFormValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }))

  const handleSelect = (field: string) => (value: T[typeof field]) =>
    setFormValues((prevState) => ({ ...prevState, [field]: value }))

  const setValue = (field: string, value: string) => setFormValues((prevState) => ({ ...prevState, [field]: value }))

  const register = (field: string) => {
    const value = formValues[field] as string
    return {
      value,
      onBlur: handleBlur,
      onChange: handleChange,
    }
  }

  const fieldError = (field: string) => ((touchedFields[field] && fieldErros[field]) || "") as string

  const resetForm = () => setFormValues(defaultValues)

  useEffect(() => {
    const errors = validate(formValues)
    setFiledErrors(errors)
  }, [formValues, validate])

  const handleSubmit = (onSubmit: SubmitHandler<T>) => async (event: FormEvent) => {
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
      handleTouchedReset()
      options?.isFormReset && resetForm()
    }
  }

  return {
    formStates: {
      formValues,
      isSubmitting,
      hasFormError,
      touchedFields,
      fieldErros,
    },
    register,
    handleSubmit,
    fieldError,
    handleSetError,
    handleSelect,
    setValue,
    resetForm,
  }
}
