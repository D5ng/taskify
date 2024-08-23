import { CommentData } from "@shared/dashboard/types"
import { useUpdateComment } from "@shared/dashboard/hooks"

interface Props {
  cardId: number
  commentId: number
  onCloseToggle: () => void
}

export default function useCommentUpdateForm(props: Props) {
  const createCommentMutation = useUpdateComment(props.cardId, props.commentId)
  const onSubmit = async (values: CommentData) => {
    await createCommentMutation.trigger({ content: values.content })
    props.onCloseToggle()
  }
  return onSubmit
}
