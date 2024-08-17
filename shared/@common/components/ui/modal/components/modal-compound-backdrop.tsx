import { createPortal } from "react-dom"
import { useModalContext } from "../modal"
import classes from "../modal.module.css"

export default function Backdrop() {
  const modalContext = useModalContext()
  const backdropElement = document.querySelector("#backdrop")!
  return createPortal(<div className={classes.backdrop} onClick={modalContext.onCloseModal}></div>, backdropElement)
}
