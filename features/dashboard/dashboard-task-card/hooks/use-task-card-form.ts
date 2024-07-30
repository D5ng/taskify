import { FormEventHandler } from "react"
import { AxiosResponse } from "axios"
import { SWRMutationResponse } from "swr/mutation"
import { useRouterQuery } from "@common/hooks"
import { CreateTaskCard } from "@shared/dashboard/types"
import { isTaskCardFormValidation } from "@features/dashboard/dashboard-task-card/utils"

interface UseTaskCardFrom {
  columnId: number
  manager: number
  title: string
  description: string
  deadline: string
  hashtags: string[]
  image: string | null
  onCloseModal: () => void
  mutation: SWRMutationResponse<AxiosResponse<any, any>, any, any, CreateTaskCard>
}

export default function useTaskCardForm({ onCloseModal, mutation, ...state }: UseTaskCardFrom) {
  const dashboardId = useRouterQuery("id")
  const isValid = isTaskCardFormValidation(state)

  const onSubmit: FormEventHandler = async (event) => {
    event.preventDefault()

    let data: CreateTaskCard | null = null

    if (!isValid) return

    const defaultData = {
      columnId: state.columnId,
      assigneeUserId: state.manager,
      title: state.title,
      description: state.description,
      dueDate: state.deadline,
      tags: state.hashtags,
      dashboardId: +dashboardId,
    }

    data = state.image ? { ...defaultData, imageUrl: state.image } : defaultData

    try {
      if (!data) throw new Error("Data 형식이 잘못되었습니다.")
      await mutation.trigger(data!)
      onCloseModal()
    } catch (error) {
      console.log(error)
    }
  }

  return {
    isDisabled: !isValid,
    onSubmit,
    isLoading: mutation.isMutating,
  }
}
