import { useToggle } from "@common/hooks"
import { Button } from "@common/components/ui"
import { InviteModal } from "@shared/dashboard/components/dashboard-modal"

export default function DetailHeaderInviteButton() {
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
