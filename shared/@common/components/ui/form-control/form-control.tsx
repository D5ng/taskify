import { createContext, useContext } from "react"
import * as FormComponents from "./components"
import type { FormControlContextType, FormControlProps } from "./form-control.type"
import classes from "./form-control.module.css"

const formControlContextInitialState: FormControlContextType = {
  id: "",
  type: "form",
  hasError: "",
}

const FormControlContext = createContext<FormControlContextType>(formControlContextInitialState)

export function useFormControlContext() {
  const formControlContext = useContext(FormControlContext)
  if (!formControlContext) throw new Error("FormControlContext에서 사용해주세요.")
  return formControlContext
}

export function FormControl(props: FormControlProps) {
  const hasError = props.hasError ? props.hasError(props.id) : ""
  const className = hasError ? `${classes.formControl} ${classes.error}` : classes.formControl

  return (
    <FormControlContext.Provider value={{ ...props, hasError }}>
      <div className={`${className} ${classes[props.type || "form"]}`}>{props.children}</div>
    </FormControlContext.Provider>
  )
}

FormControl.Input = FormComponents.Input
FormControl.Label = FormComponents.Label
FormControl.ErrorMessage = FormComponents.ErrorMessage
FormControl.TextArea = FormComponents.TextArea
FormControl.Upload = FormComponents.Upload

export * from "./form-control.type"
