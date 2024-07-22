import React from "react"
import Image from "next/image"
import classes from "./modal.module.css"
import { useModalContext } from ".."

export default function Close() {
  const modalContext = useModalContext()
  return (
    <button className={classes.close} onClick={modalContext.onCloseModal}>
      <Image src="/images/icons/close-icon.svg" alt="모달 창 닫기" fill />
    </button>
  )
}
