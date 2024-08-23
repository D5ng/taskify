import useSWRInfinite from "swr/infinite"
import { CommentApiInstance } from "@shared/dashboard/services"
import type { Comments } from "@shared/dashboard/types"

const getKey = (cardId: number) => (pageIndex: number, previousPageData: Comments) => {
  if (previousPageData && !previousPageData.cursorId) return null
  if (pageIndex === 0) return `comments?cardId=${cardId}&size=3`
  return `comments?cardId=${cardId}&size=3&cursorId=${previousPageData.cursorId}`
}

export function useFetchComments(cardId: number) {
  const commentsQuery = useSWRInfinite(getKey(cardId), CommentApiInstance.getComments)
  const lastPage = commentsQuery.data?.[commentsQuery.data?.length - 1]
  return {
    ...commentsQuery,
    lastPage,
  }
}
