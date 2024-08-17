import { useFormControlContext } from "../form-control"
import type { FormControlLabelProps } from "../form-control"
import classes from "../form-control.module.css"

export default function Label(props: FormControlLabelProps) {
  const formControlContext = useFormControlContext()

  return (
    <label htmlFor={formControlContext.id} className={classes.label}>
      {props.children!}
      {props.isRequired ? <em className={classes["label-required"]}> *</em> : ""}
    </label>
  )
}
