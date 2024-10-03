import { useToggle } from "@common/hooks"
import { Button } from "@common/components/ui"
import { DashboardInviteModal } from "@features/dashboard/dashboard-invite-modal/components"
import classes from "./detail-header-button.module.css"

export default function DetailHeaderInviteButton() {
  const { isToggle, onOpenToggle, onCloseToggle } = useToggle()
  return (
    <>
      {isToggle && <DashboardInviteModal onCloseModal={onCloseToggle} />}
      <Button
        iconUrl="/images/icons/add-icon.svg"
        buttonStyle="outline"
        className={classes.padding}
        onClick={onOpenToggle}
      >
        초대하기
      </Button>
    </>
  )
}
