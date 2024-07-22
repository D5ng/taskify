import { PropsWithChildren } from "react"
import { useModalContext } from ".."
import { Button } from "@common/components/ui/button"

export default function PrimaryButton(props: PropsWithChildren) {
  const modalContext = useModalContext()
  return (
    <Button
      isLoading={modalContext.isLoading}
      isDisabled={modalContext.isLoading || modalContext.isDisabled}
      size="modal"
      buttonStyle="primary"
      type="submit"
    >
      {props.children}
    </Button>
  )
}
