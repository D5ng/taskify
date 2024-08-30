import useSWRMutation from "swr/mutation"
import { InvitedDashboardAPI } from "@shared/dashboard/services"
import { useFetchInvitedDashboard, useDashboardPageStore, useFetchDashboards } from "@shared/dashboard/hooks"

export function useAcceptInvite(invitationId: number) {
  const currentPage = useDashboardPageStore.use.currentPage()
  const { mutate } = useFetchInvitedDashboard()
  const { mutate: dashboardMutate } = useFetchDashboards(currentPage)

  return useSWRMutation(`invitations/${invitationId}`, InvitedDashboardAPI.updateInvitedDashboard, {
    onError(err, key, config) {
      console.log(err)
    },

    onSuccess(data, key, config) {
      mutate()
      dashboardMutate()
    },
  })
}

export function useRefuseInvite(invitationId: number) {
  const currentPage = useDashboardPageStore.use.currentPage()
  const { mutate } = useFetchInvitedDashboard()
  const { mutate: dashboardMutate } = useFetchDashboards(currentPage)

  return useSWRMutation(`invitations/${invitationId}`, InvitedDashboardAPI.updateInvitedDashboard, {
    onError(err, key, config) {
      console.log(err)
    },

    onSuccess(data, key, config) {
      mutate()
      dashboardMutate()
    },
  })
}
