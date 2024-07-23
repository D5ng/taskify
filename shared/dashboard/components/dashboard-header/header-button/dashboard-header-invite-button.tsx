import React from "react"
import { useToggle } from "@common/hooks"
import { Button } from "@common/components/ui/button"

export default function DashboardHeaderInviteButton() {
  const { isToggle, handleOpenToggle, handleCloseToggle } = useToggle()
  const style = { padding: "10px 16px" }
  return (
    <>
      <Button iconUrl="/images/icons/add-icon.svg" buttonStyle="outline" customStyle={style} onClick={handleOpenToggle}>
        초대하기
      </Button>
    </>
  )
}
