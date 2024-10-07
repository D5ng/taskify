import { Button } from "@common/components/ui"
import classes from "./column-error-fallback.module.css"

interface ErrorFallbackProps {
  onRefetch: () => void
}

export default function ColumnErrorFallback({ onRefetch }: ErrorFallbackProps) {
  const handleReload = () => window.location.reload()
  return (
    <div className={`${classes["error-wrapper"]}`}>
      <h3 className={classes["error-title"]}>잠시 후 다시 시도해주세요.</h3>
      <p className={classes["error-desc"]}>
        현재 일시적인 오류가 발생해 대시보드 데이터를 불러오지 못했어요.
        <br /> 잠시 후 다시 시도하거나, 페이지를 새로고침 해주세요
      </p>
      <div className={classes["error-buttons"]}>
        <Button buttonStyle="primary" onClick={onRefetch} className={classes.button}>
          다시 시도
        </Button>
        <Button buttonStyle="secondary" onClick={handleReload} className={classes.button}>
          새로고침
        </Button>
      </div>
    </div>
  )
}
