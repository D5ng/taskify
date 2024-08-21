import useSWRMutation from "swr/mutation"
import { InvitedDashboardAPI } from "@shared/dashboard/services"
import { useFetchInvitedDashboard } from "../queries/dashboard-invited.query"

export function useUpdateInvitedDashboard(currentPage: number, invitationId: number) {
  const { mutate } = useFetchInvitedDashboard()
  return useSWRMutation(`invitations/${invitationId}`, InvitedDashboardAPI.updateInvitedDashboard, {
    onError(err, key, config) {
      console.log(err)
    },

    onSuccess(data, key, config) {
      mutate()
    },
  })
}
