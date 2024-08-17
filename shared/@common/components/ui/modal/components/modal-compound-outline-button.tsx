import { PropsWithChildren } from "react"
import { useModalContext } from "../modal"
import { Button } from "@common/components/ui"

export default function OutlineButton(props: PropsWithChildren) {
  const modalContext = useModalContext()
  return (
    <Button isLoading={false} isDisabled={false} size="modal" buttonStyle="outline" onClick={modalContext.onCloseModal}>
      {props.children}
    </Button>
  )
}
