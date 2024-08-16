import { InputHTMLAttributes } from "react"
import { InputProps, useFormControlContext } from ".."
import classes from "../index.module.css"

export default function Input(props: InputProps) {
  const formControlContext = useFormControlContext()
  const isInputFile = props.type === "file" ? classes["upload-input"] : ""
  return (
    <input
      {...props}
      id={formControlContext.id}
      name={formControlContext.id}
      className={`${classes.input} ${isInputFile} ${props.className}`}
      // value={formControlContext.inputValue}
      // onChange={formControlContext.handleInputValueChange || formControlContext.handleUpload}
      // onBlur={formControlContext.handleInputBlur}
      // onKeyDown={formControlContext.handleKeyDown}
      // onKeyUp={formControlContext.handleKeyUp}
      disabled={props.disabled || false}
    />
  )
}
