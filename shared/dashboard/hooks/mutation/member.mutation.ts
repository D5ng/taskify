import useSWRMutation from "swr/mutation"
import { useFetchMembers } from "@shared/dashboard/hooks"
import { MemberApiInstance } from "@shared/dashboard/services"

export function useDeleteMember(dashboardId: number, currentPage: number = 0, memberId: number) {
  const { mutate } = useFetchMembers(dashboardId, currentPage)

  return useSWRMutation(`members/${memberId}`, MemberApiInstance.deleteMembers, {
    onError: (error) => {
      console.log(error)
    },
    onSuccess: () => {
      mutate()
    },
  })
}
