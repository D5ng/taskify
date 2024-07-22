import { PropsWithChildren } from "react"
import { useModalContext } from ".."
import { Button } from "@common/components/ui/button"

export default function OutlineButton(props: PropsWithChildren) {
  const modalContext = useModalContext()
  return (
    <Button isLoading={false} isDisabled={false} size="modal" buttonStyle="outline" onClick={modalContext.onCloseModal}>
      {props.children}
    </Button>
  )
}
