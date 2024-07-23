import useSWR from "swr"
import { TaskCardApiInstance } from "@shared/dashboard/services"

export function useFetchTaskCard(columnId: number) {
  const fetcher = (url: string) => TaskCardApiInstance.getTaskCards(url)
  return useSWR(`cards?columnId=${columnId}`, fetcher)
}
