import { KeyboardEventHandler } from "react"
import { useFormControlContext } from "../form-control"
import type { FormControlTextAreaProps } from "../form-control"
import classes from "../form-control.module.css"

export default function TextArea(props: FormControlTextAreaProps) {
  const formControlContext = useFormControlContext()
  return (
    <textarea
      className={classes.textarea}
      id={formControlContext.id}
      name={formControlContext.id}
      {...props}
    ></textarea>
  )
}
