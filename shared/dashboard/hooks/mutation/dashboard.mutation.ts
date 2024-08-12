import useSWRMutation from "swr/mutation"
import { useFetchDashboards, useFetchInvitation, useInvitePageStore } from "@shared/dashboard/hooks"
import { DashboardApiInstance } from "@shared/dashboard/services"
import { useRouterQuery } from "@common/hooks"
import { INVITE_POST_COUNT } from "@/features/dashboard/dashboard-invite/constants"
import { AxiosError } from "axios"

export function useCreateDashboard(currentPage: number) {
  const { mutate } = useFetchDashboards(currentPage)

  return useSWRMutation("dashboards", DashboardApiInstance.createDashbaord, {
    onError(err, key, config) {
      console.log(err)
    },

    onSuccess() {
      mutate()
    },
  })
}

export function useUpdateDashboard(dashboardId: number, currentPage: number) {
  const { mutate } = useFetchDashboards(currentPage)

  return useSWRMutation(`dashboards/${dashboardId}`, DashboardApiInstance.updateDashboard, {
    onError(err, key, config) {
      console.log(err)
    },

    onSuccess() {
      mutate()
    },
  })
}

export function useDeleteDashboard(dashboardId: number, currentPage: number) {
  const { mutate } = useFetchDashboards(currentPage)

  return useSWRMutation(`dashboards/${dashboardId}`, DashboardApiInstance.deleteDashboard, {
    onError(err, key, config) {
      console.log(err)
    },

    onSuccess() {
      mutate()
    },
  })
}

export function useInvite(currentPage: number) {
  const dashboardId = useRouterQuery("id")
  const { mutate, error } = useFetchInvitation(currentPage)

  return useSWRMutation(`dashboards/${dashboardId}/invitations`, DashboardApiInstance.dashboardInvite, {
    onError(err, key, config) {
      console.log(error)
    },

    onSuccess(data, key, config) {
      mutate()
    },
  })
}

export function useDeleteInvitation(currentPage: number, invitationId: number) {
  const dashboardId = useRouterQuery("id")
  const { mutate, data: invitationData } = useFetchInvitation(currentPage)
  const currentPagination = useInvitePageStore.use.currentPage()
  const setCurrentPage = useInvitePageStore.use.setCurrentPage()

  return useSWRMutation(
    `dashboards/${dashboardId}/invitations/${invitationId}`,
    DashboardApiInstance.deleteInvitation,
    {
      onError(err, key, config) {
        console.log("Mutation Error", Error)
      },

      onSuccess(data, key) {
        const calculatePage = invitationData!.invitations.length - 1 === 0 ? currentPagination - 1 : currentPagination
        setCurrentPage(calculatePage || 1)
        mutate()
      },
    }
  )
}
