import Suspensive from "@common/components/suspensive"
import { useFetchTaskCard } from "@shared/dashboard/hooks"
import { DashboardTaskCardList, DashboardTaskCardSkeleton } from "@features/dashboard/dashboard-task-card/components"

interface Props {
  columnId: number
}

export default function DashboardTaskCard(props: Props) {
  const taskCardQuery = useFetchTaskCard(props.columnId)

  return (
    <Suspensive isLoading={taskCardQuery.isLoading} fallback={<DashboardTaskCardSkeleton />}>
      <DashboardTaskCardList columnId={props.columnId} />
    </Suspensive>
  )
}
