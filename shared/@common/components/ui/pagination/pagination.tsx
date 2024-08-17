import { createContext, useContext } from "react"
import type { PaginationContextProps, PaginationValues } from "./pagination.type"
import * as Components from "./components"
import classes from "./pagination.module.css"

const PaginationContext = createContext<PaginationContextProps>({
  maxPage: 0,
  currentPage: 0,
  onPrevPage: () => {},
  onNextPage: () => {},
})

export function usePaginationContext() {
  const paginationContext = useContext(PaginationContext)
  if (!paginationContext) throw new Error("PaginationContext에서 사용해주세요.")
  return paginationContext
}

export function Pagination(props: PaginationValues) {
  const { maxPage, setCurrentPage, currentPage } = props.value

  const handlePrevPage = () => setCurrentPage(currentPage === 1 ? 1 : currentPage - 1)
  const handleNextPage = () => setCurrentPage(currentPage >= maxPage ? maxPage : currentPage + 1)

  const value = {
    maxPage,
    currentPage,
    onNextPage: handleNextPage,
    onPrevPage: handlePrevPage,
  }

  return (
    <PaginationContext.Provider value={value}>
      <div className={classes.pagination}>{props.children}</div>
    </PaginationContext.Provider>
  )
}

Pagination.Count = Components.Count
Pagination.Prev = Components.Prev
Pagination.Next = Components.Next
Pagination.ButtonLayout = Components.ButtonLayout
