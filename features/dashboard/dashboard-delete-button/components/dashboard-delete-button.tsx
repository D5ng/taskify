import { Button } from "@common/components/ui/button"
import { useToggle } from "@common/hooks"
import classes from "./dashboard-delete-button.module.css"
import { DeleteDashboardModal } from "@/shared/dashboard/components"

export default function DashboardDeleteButton() {
  const { isToggle, onOpenToggle, onCloseToggle } = useToggle()

  return (
    <div className={classes["button-wrapper"]}>
      <DeleteDashboardModal onCloseModal={onCloseToggle} isToggle={isToggle} />
      <Button size="large" buttonStyle="outline" fontColor="black" onClick={onOpenToggle}>
        대시보드 삭제하기
      </Button>
    </div>
  )
}
