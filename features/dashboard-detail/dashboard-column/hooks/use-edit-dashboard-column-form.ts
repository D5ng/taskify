import React, { FormEvent } from "react"
import { UpdateDashboardColumn } from "@shared/dashboard/types"
import { AxiosResponse } from "axios"
import { SWRMutationResponse } from "swr/mutation"

interface Props {
  value: string
  onCloseModal: () => void
  mutation: SWRMutationResponse<AxiosResponse<any, any>, any, any, UpdateDashboardColumn>
}

export default function useEditDashboardColumnForm({ mutation, value, onCloseModal }: Props) {
  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!value.trim().length) return
    await mutation.trigger({ title: value })
    onCloseModal()
  }

  return {
    onSubmit,
    isLoading: mutation.isMutating,
  }
}
