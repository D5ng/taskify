import { useToggle } from "@common/hooks"
import { Button } from "@common/components/ui"
import { DashboardInviteModal } from "@features/dashboard/dashboard-invite-modal/components"

export default function DetailHeaderInviteButton() {
  const { isToggle, onOpenToggle, onCloseToggle } = useToggle()
  const style = { padding: "10px 16px" }
  return (
    <>
      {isToggle && <DashboardInviteModal onCloseModal={onCloseToggle} />}
      <Button iconUrl="/images/icons/add-icon.svg" buttonStyle="outline" customStyle={style} onClick={onOpenToggle}>
        초대하기
      </Button>
    </>
  )
}
