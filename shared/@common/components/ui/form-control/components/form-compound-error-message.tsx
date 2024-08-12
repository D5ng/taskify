import { useFormControlContext } from ".."
import classes from "../index.module.css"

export default function ErrorMessage() {
  const formControlContext = useFormControlContext()
  if (!formControlContext.errorMessage) return null
  return <p className={classes.errorMessage}>{formControlContext.errorMessage}</p>
}
