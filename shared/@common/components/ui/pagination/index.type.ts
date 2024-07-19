import { Dispatch, PropsWithChildren, SetStateAction } from "react"

export interface PaginationContextProps {
  maxPage: number
  currentPage: number
  onNextPage: () => void
  onPrevPage: () => void
}

export interface PaginationValues extends PropsWithChildren {
  value: {
    setCurrentPage: (page: number) => void
  } & Pick<PaginationContextProps, "maxPage" | "currentPage">
}

export interface ButtonProps {
  mode: "prev" | "next"
  onPagination: () => void
}
