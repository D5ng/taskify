import { useRouter } from "next/router"
import { FormEventHandler } from "react"
import { useDashboardPageStore, useDeleteDashboard } from "@shared/dashboard/hooks"

interface Props {
  onCloseModal: () => void
}

export default function useDashboardDeleteForm(props: Props) {
  const router = useRouter()
  const dashboardId = +router.query.id!
  const currentPage = useDashboardPageStore.use.currentPage()
  const deleteDashboardMutation = useDeleteDashboard(dashboardId, currentPage)

  const onSubmit: FormEventHandler = async (event) => {
    event.preventDefault()
    await deleteDashboardMutation.trigger()
    props.onCloseModal()
    router.replace("/dashboard/my")
  }

  return {
    onSubmit,
    isLoading: deleteDashboardMutation.isMutating,
  }
}
