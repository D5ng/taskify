import { Button } from "@common/components/ui"
import { useToggle } from "@common/hooks"
import { DashboardDeleteModal } from "@features/dashboard/dashboard-delete/components"
import classes from "./dashboard-delete-button.module.css"

export default function DashboardDeleteButton() {
  const { isToggle, onOpenToggle, onCloseToggle } = useToggle()

  return (
    <div className={classes["button-wrapper"]}>
      <DashboardDeleteModal onCloseModal={onCloseToggle} isToggle={isToggle} />
      <Button size="large" buttonStyle="outline" fontColor="black" onClick={onOpenToggle}>
        대시보드 삭제하기
      </Button>
    </div>
  )
}
