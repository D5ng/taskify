import useSWRMutation from "swr/mutation"
import { useFetchDashboards, useFetchInvitation } from "@shared/dashboard/hooks"
import { DashboardApiInstance } from "@shared/dashboard/services"
import { useRouterQuery } from "@common/hooks"

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
  const { mutate } = useFetchInvitation(currentPage)

  return useSWRMutation(`dashboards/${dashboardId}/invitations`, DashboardApiInstance.dashboardInvite, {
    onError(err, key, config) {
      console.log(err)
    },

    onSuccess() {
      mutate()
    },
  })
}

export function useDeleteInvitation(currentPage: number, invitationId: number) {
  const dashboardId = useRouterQuery("id")
  const { mutate } = useFetchInvitation(currentPage)

  return useSWRMutation(
    `dashboards/${dashboardId}/invitations/${invitationId}`,
    DashboardApiInstance.deleteInvitation,
    {
      onError(err, key, config) {
        console.log(err)
      },

      onSuccess() {
        mutate()
      },
    }
  )
}
