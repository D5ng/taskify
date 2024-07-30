import React from "react"
import { useToggle } from "@common/hooks"
import { Button } from "@common/components/ui/button"
import { InviteModal } from "../../dashboard-modal"

export default function DashboardHeaderInviteButton() {
  const { isToggle, onOpenToggle, onCloseToggle } = useToggle()
  const style = { padding: "10px 16px" }
  return (
    <>
      {isToggle && <InviteModal onCloseModal={onCloseToggle} />}
      <Button iconUrl="/images/icons/add-icon.svg" buttonStyle="outline" customStyle={style} onClick={onOpenToggle}>
        초대하기
      </Button>
    </>
  )
}
