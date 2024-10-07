import { Button } from "@common/components/ui"
import classes from "./dashboard-error-boundary.module.css"

interface ErrorFallbackProps {
  onRefetch: () => void
}

export default function DashboardErrorFallback({ onRefetch }: ErrorFallbackProps) {
  return (
    <div className={`${classes["error-wrapper"]}`}>
      <h3 className={classes["error-title"]}>잠시 후 다시 시도해주세요.</h3>
      <p className={classes["error-desc"]}>
        현재 일시적인 오류가 발생해 대시보드 데이터를 불러오지 못했어요.
        <br /> 잠시 후 다시 시도해 주세요.
      </p>
      <Button buttonStyle="primary" onClick={onRefetch} className={classes.button}>
        다시 시도
      </Button>
    </div>
  )
}
