import useSWRMutation from "swr/mutation"
import { useFetchComments } from "@shared/dashboard/hooks"
import { CommentApiInstance } from "@shared/dashboard/services"

export function useCreateComment(cardId: number) {
  const { mutate } = useFetchComments(cardId)

  return useSWRMutation(`comments`, CommentApiInstance.createComment, {
    onError(err, key, config) {
      console.log(err)
    },

    onSuccess() {
      mutate()
    },
  })
}

export function useDeleteComment(cardId: number, commentId: number) {
  const { mutate } = useFetchComments(cardId)

  return useSWRMutation(`comments/${commentId}`, CommentApiInstance.deleteComment, {
    onError(err, key, config) {
      console.log(err)
    },

    onSuccess() {
      mutate()
    },
  })
}

export function useUpdateComment(cardId: number, commentId: number) {
  const { mutate } = useFetchComments(cardId)

  return useSWRMutation(`comments/${commentId}`, CommentApiInstance.updateComment, {
    onError(err, key, config) {
      console.log(err)
    },

    onSuccess() {
      mutate()
    },
  })
}
