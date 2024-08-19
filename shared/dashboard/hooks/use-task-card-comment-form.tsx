import { useRouterQuery } from "@common/hooks"
import { CommentData } from "@shared/dashboard/types"
import { useCreateComment } from "@shared/dashboard/hooks"

interface Props {
  cardId: number
  columnId: number
}

export default function useTaskCardCommentForm(props: Props) {
  const dashboardId = +useRouterQuery("id")
  const createCommentMutation = useCreateComment(props.cardId)

  const onSubmit = async (values: CommentData) => {
    console.log("Submit")
    await createCommentMutation.trigger({
      dashboardId,
      cardId: props.cardId,
      columnId: props.columnId,
      content: values.content,
    })
  }
  return onSubmit
}
