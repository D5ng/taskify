import { createPortal } from "react-dom"
import { createContext, useContext } from "react"
import { ModalContextStates, ModalContextValues } from "./modal.type"
import * as Components from "./components"
import classes from "./modal.module.css"

const initialModalContextState = {
  isLoading: false,
  onCloseModal: () => {},
}

const ModalContext = createContext<ModalContextStates>(initialModalContextState)

export function useModalContext() {
  const modalContext = useContext(ModalContext)
  if (!modalContext) throw new Error("Modal Context에서 사용해주세요")
  return modalContext
}

export function Modal(props: ModalContextValues) {
  const modalElement = document.querySelector("#modal")!
  const className = `${classes["modal-root"]} ${props.defaultSize ? classes["default-size"] : ""}`
  return createPortal(
    <ModalContext.Provider value={props.value}>
      <div className={className}>{props.children}</div>
    </ModalContext.Provider>,
    modalElement
  )
}

Modal.Form = Components.Form
Modal.Description = Components.Description
Modal.Contents = Components.Contents
Modal.Title = Components.Title
Modal.Backdrop = Components.Backdrop
Modal.ButtonLayout = Components.ButtonLayout
Modal.OutlineButton = Components.OutlineButton
Modal.PrimaryButton = Components.PrimaryButton
Modal.DeleteButton = Components.DeleteButton
Modal.Close = Components.Close
Modal.Utils = Components.Utils
Modal.ErrorMessage = Components.ErrorMessage
