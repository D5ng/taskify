import { createContext, useContext } from "react"
import * as FormComponents from "./components"
import type { FormControlContextValues, FormControlContextProps } from "./index.type"
import classes from "./index.module.css"

const formControlContextInitialState: FormControlContextProps = {
  id: "",
  isValid: false,
  inputValue: "",
  type: "form",
  hasError: false,
  handleInputValueChange: () => {},
  handleInputBlur: () => {},
}

const FormControlContext = createContext<FormControlContextProps>(formControlContextInitialState)

export function useFormControlContext() {
  const formControlContext = useContext(FormControlContext)
  if (!formControlContext) throw new Error("FormControlContext에서 사용해주세요.")
  return formControlContext
}

export default function FormControl(props: FormControlContextValues) {
  const className =
    props.value.type === ""
      ? classes.formControl
      : props.value.hasError
      ? `${classes.formControl} ${classes.error}`
      : classes.formControl

  return (
    <FormControlContext.Provider value={props.value}>
      <div className={`${className} ${classes[props.value.type || "form"]}`}>{props.children}</div>
    </FormControlContext.Provider>
  )
}

FormControl.Input = FormComponents.Input
FormControl.Label = FormComponents.Label
FormControl.ErrorMessage = FormComponents.ErrorMessage

export * from "./index.type"
