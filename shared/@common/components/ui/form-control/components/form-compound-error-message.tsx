import { PropsWithChildren } from "react"
import { useFormControlContext } from ".."
import classes from "../index.module.css"

export default function ErrorMessage(props: PropsWithChildren) {
  const formControlContext = useFormControlContext()
  if (formControlContext.hasError) return <p className={classes.errorMessage}>{props.children}</p>
  return null
}
