import React from "react"
import AddIcon from "@/public/images/icons/add-icon.svg"
import { Button } from "@common/components/ui/button"

export default function DashboardHeaderInviteButton() {
  const style = { padding: "10px 16px" }
  return (
    <>
      <Button iconUrl={AddIcon} buttonStyle="outline" customStyle={style}>
        초대하기
      </Button>
    </>
  )
}
