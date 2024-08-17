import { useFormControlContext } from "../form-control"
import classes from "../form-control.module.css"

export default function ErrorMessage() {
  const formControlContext = useFormControlContext()
  if (!formControlContext.hasError) return null
  return <p className={classes.errorMessage}>{formControlContext.hasError}</p>
}
