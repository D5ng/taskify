import { ReactNode } from "react"
import { useModalContext } from "../modal"

interface FormProps {
  children: ReactNode
}

export default function Form(props: FormProps) {
  const modalContext = useModalContext()
  return <form onSubmit={modalContext.onSubmit}>{props.children}</form>
}
