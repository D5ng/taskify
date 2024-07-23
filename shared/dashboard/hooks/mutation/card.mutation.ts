import useSWRMutation from "swr/mutation"
import { TaskCardApiInstance } from "@shared/dashboard/services"
import { useFetchTaskCard } from "@shared/dashboard/hooks"

export function useCreateTaskCard(columnId: number) {
  const { mutate } = useFetchTaskCard(columnId)

  return useSWRMutation(`cards`, TaskCardApiInstance.createTaskCard, {
    onError(err, key, config) {
      console.log(err)
    },

    onSuccess() {
      mutate()
    },
  })
}

export function useUpdateTaskCard(columnId: number, cardId: number) {
  const { mutate } = useFetchTaskCard(columnId)

  return useSWRMutation(`cards/${cardId}`, TaskCardApiInstance.updateTaskCard, {
    onError(err, key, config) {
      console.log(err)
    },

    onSuccess() {
      mutate()
    },
  })
}

export function useDeleteTaskCard(columnId: number, cardId: number) {
  const { mutate } = useFetchTaskCard(columnId)

  return useSWRMutation(`cards/${cardId}`, TaskCardApiInstance.deleteTaskCard, {
    onError(err, key, config) {
      console.log(err)
    },

    onSuccess() {
      mutate()
    },
  })
}
