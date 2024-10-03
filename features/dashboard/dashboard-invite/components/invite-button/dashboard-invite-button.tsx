import { Button } from "@common/components/ui"
import { useToggle } from "@common/hooks"
import AddIcon from "@/public/images/icons/add-white-icon.svg"
import { DashboardInviteModal } from "@features/dashboard/dashboard-invite-modal/components"
import classes from "./dashboard-invite-button.module.css"

export default function DashboardInviteButton() {
  const { isToggle, onOpenToggle, onCloseToggle } = useToggle()
  const style = { width: "105px", height: "32px", borderRadius: "4px" }
  return (
    <>
      {isToggle && <DashboardInviteModal onCloseModal={onCloseToggle} />}
      <Button iconUrl={AddIcon} buttonStyle="primary" size="none" className={classes.button} onClick={onOpenToggle}>
        초대하기
      </Button>
    </>
  )
}
