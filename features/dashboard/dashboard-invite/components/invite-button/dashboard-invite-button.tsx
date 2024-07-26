import AddIcon from "@/public/images/icons/add-white-icon.svg"
import { Button } from "@common/components/ui/button"
import { useToggle } from "@common/hooks"
import { InviteModal } from "@shared/dashboard/components"

export default function DashboardInviteButton() {
  const { isToggle, onOpenToggle, onCloseToggle } = useToggle()
  const style = { width: "105px", height: "32px", borderRadius: "4px" }
  return (
    <>
      {isToggle && <InviteModal isToggle={isToggle} onCloseModal={onCloseToggle} />}
      <Button iconUrl={AddIcon} buttonStyle="primary" size="none" customStyle={style} onClick={onOpenToggle}>
        초대하기
      </Button>
    </>
  )
}
