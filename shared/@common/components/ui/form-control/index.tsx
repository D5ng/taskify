import { createContext, useContext } from "react"
import * as FormComponents from "./components"
import type { FormControlContextValues, FormControlContextProps } from "./index.type"
import classes from "./index.module.css"

const formControlContextInitialState: FormControlContextProps = {
  id: "",
  isValid: false,
  // inputValue: "",
  type: "form",
  // handleInputValueChange: () => {},
  // handleInputBlur: () => {},
}

const FormControlContext = createContext<FormControlContextProps>(formControlContextInitialState)

export function useFormControlContext() {
  const formControlContext = useContext(FormControlContext)
  if (!formControlContext) throw new Error("FormControlContext에서 사용해주세요.")
  return formControlContext
}

export default function FormControl(props: FormControlContextValues) {
  const errorMessage = props.hasError(props.id)
  const className = errorMessage ? `${classes.formControl} ${classes.error}` : classes.formControl

  return (
    <FormControlContext.Provider value={{ ...props, errorMessage }}>
      <div className={`${className} ${classes[props.type || "form"]}`}>{props.children}</div>
    </FormControlContext.Provider>
  )
}

FormControl.Input = FormComponents.Input
FormControl.Label = FormComponents.Label
FormControl.ErrorMessage = FormComponents.ErrorMessage
FormControl.TextArea = FormComponents.TextArea
FormControl.Upload = FormComponents.Upload

export * from "./index.type"
