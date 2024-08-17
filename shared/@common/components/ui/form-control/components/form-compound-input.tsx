import { useFormControlContext } from "../form-control"
import type { FormControlInputProps } from "../form-control"
import classes from "../form-control.module.css"

export default function Input(props: FormControlInputProps) {
  const formControlContext = useFormControlContext()
  const isInputFile = props.type === "file" ? classes["upload-input"] : ""
  return (
    <input
      {...props}
      id={formControlContext.id}
      name={formControlContext.id}
      className={`${classes.input} ${isInputFile} ${props.className}`}
      disabled={props.disabled || false}
    />
  )
}
