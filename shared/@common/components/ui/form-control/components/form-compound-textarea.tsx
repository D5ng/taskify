import { TextareaHTMLAttributes } from "react"
import { useFormControlContext } from ".."
import classes from "../index.module.css"

export default function TextArea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const formControlContext = useFormControlContext()
  return (
    <textarea
      {...props}
      className={classes.textarea}
      placeholder={props.placeholder}
      id={formControlContext.id}
      name={formControlContext.id}
    ></textarea>
  )
}
