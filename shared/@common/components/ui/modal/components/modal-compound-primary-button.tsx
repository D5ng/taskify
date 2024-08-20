import { PropsWithChildren } from "react"
import { useModalContext } from "../modal"
import { Button } from "@common/components/ui"

export default function PrimaryButton(props: PropsWithChildren) {
  const modalContext = useModalContext()
  return (
    <Button
      isLoading={modalContext.isLoading}
      disabled={modalContext.isLoading || modalContext.isDisabled}
      size="modal"
      buttonStyle="primary"
      type="submit"
    >
      {props.children}
    </Button>
  )
}
