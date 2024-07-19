import { PropsWithChildren } from "react"
import { useFormControlContext } from ".."
import classes from "../form-control.module.css"

export default function ErrorMessage(props: PropsWithChildren) {
  const formControlContext = useFormControlContext()
  if (formControlContext.hasError) return <p className={classes.errorMessage}>{props.children}</p>
  return null
}
