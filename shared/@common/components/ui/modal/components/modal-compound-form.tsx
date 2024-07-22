import { PropsWithChildren } from "react"
import { useModalContext } from ".."
import classes from "./modal.module.css"

interface FormProps extends PropsWithChildren {
  size?: "small"
}

export default function Form(props: FormProps) {
  const modalContext = useModalContext()
  const className = `${classes["modal-layout"]} ${props.size && classes[props.size]}`
  return (
    <form className={className} onSubmit={modalContext.onSubmit}>
      {props.children}
    </form>
  )
}
