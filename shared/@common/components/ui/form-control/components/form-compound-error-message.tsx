import { useFormControlContext } from "../form-control"
import classes from "../form-control.module.css"

interface Props {
  errorMessage?: string
}

export default function ErrorMessage(props: Props) {
  const formControlContext = useFormControlContext()
  if (props.errorMessage) return <p className={classes.errorMessage}>{props.errorMessage}</p>
  if (!formControlContext.hasError || !props.errorMessage) return null
  return <p className={classes.errorMessage}>{formControlContext.hasError}</p>
}
