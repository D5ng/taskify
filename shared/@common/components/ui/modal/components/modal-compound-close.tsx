import React from "react"
import Image from "next/image"
import { useModalContext } from ".."
import classes from "../index.module.css"

export default function Close() {
  const modalContext = useModalContext()
  return (
    <button className={classes.close} onClick={modalContext.onCloseModal}>
      <Image src="/images/icons/close-icon.svg" alt="모달 창 닫기" fill />
    </button>
  )
}
