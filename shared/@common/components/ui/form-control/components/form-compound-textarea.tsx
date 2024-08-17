import { useFormControlContext } from "../form-control"
import type { FormControlTextAreaProps } from "../form-control"
import classes from "../form-control.module.css"

export default function TextArea(props: FormControlTextAreaProps) {
  const formControlContext = useFormControlContext()
  return (
    <textarea
      {...props}
      className={classes.textarea}
      id={formControlContext.id}
      name={formControlContext.id}
    ></textarea>
  )
}
