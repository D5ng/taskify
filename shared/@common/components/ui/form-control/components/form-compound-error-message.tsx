import { useFormControlContext } from "../form-control"
import classes from "../form-control.module.css"

interface Props {
  errorMessage?: string
}

export default function ErrorMessage(props: Props) {
  const formControlContext = useFormControlContext()
  if (!formControlContext.hasError) return null
  return <p className={classes.errorMessage}>{formControlContext.hasError}</p>
}
