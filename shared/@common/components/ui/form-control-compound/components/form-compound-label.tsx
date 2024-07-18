import { PropsWithChildren } from "react"
import { useFormControlContext } from "../form-control"
import classes from "../form-control.module.css"

export default function Label(props: PropsWithChildren<{ isRequired?: boolean }>) {
  const formControlContext = useFormControlContext()

  return (
    <label htmlFor={formControlContext.id} className={classes.label}>
      {props.children!}
      {props.isRequired ? <em className={classes["label-required"]}> *</em> : ""}
    </label>
  )
}
