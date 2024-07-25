import useSWR from "swr"
import { CommentApiInstance } from "@shared/dashboard/services"

export function useFetchComments(cardId: number) {
  const fetcher = (url: string) => CommentApiInstance.getComments(url)
  return useSWR(`comments?cardId=${cardId}`, fetcher)
}
