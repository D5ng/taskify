import useSWRMutation from "swr/mutation"
import { DashboardColumnApiInstance } from "@shared/dashboard/services"
import { useFetchDashboardColumns } from "../queries/dashboard-column.query"

export function useUpdateDashboardColumn(columnId: number) {
  const { mutate } = useFetchDashboardColumns()
  return useSWRMutation(`columns/${columnId}`, DashboardColumnApiInstance.updateColumn, {
    onError(err, key, config) {
      console.log(err)
    },

    onSuccess(data, key, config) {
      mutate()
    },
  })
}

export function useDeleteDashboardColumn(columnId: number) {
  const { mutate } = useFetchDashboardColumns()
  return useSWRMutation(`columns/${columnId}`, DashboardColumnApiInstance.deleteColumn, {
    onError(err, key, config) {
      console.log(err)
    },

    onSuccess(data, key, config) {
      mutate()
    },
  })
}
