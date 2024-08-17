import classes from "./dashboard-edit-form-skeleton.module.css"
import { Button } from "@/shared/@common/components/ui"

export default function DashboardEditformSkeleton() {
  return (
    <div>
      <div className={`${classes["dashboard-title"]} skeleton`}></div>
      <div className={`${classes["color-chips"]} skeleton`}></div>
      <div>
        <div className={classes["dashboard-name"]}>대시보드 이름</div>
        <div className={`${classes["dashboard-input"]} skeleton`}></div>
      </div>
      <div className={classes["dashboard-button"]}>
        <Button size="small" buttonStyle="primary" type="submit">
          변경
        </Button>
      </div>
    </div>
  )
}
