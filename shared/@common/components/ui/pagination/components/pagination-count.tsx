import { usePaginationContext } from ".."
import classes from "../index.module.css"

export default function Count() {
  const paginationContext = usePaginationContext()
  return (
    <span className={classes["pagination-info"]}>
      {paginationContext.maxPage} 페이지 중 {paginationContext.currentPage}
    </span>
  )
}
