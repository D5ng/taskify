import { Suspensive } from "@common/components"
import { useFetchTaskCard } from "@shared/dashboard/hooks"
import { DashboardTaskCardList, DashboardTaskCardSkeleton } from "@features/dashboard/dashboard-task-card/components"
import { DashboardColumn } from "@/shared/dashboard/types"

interface Props extends Pick<DashboardColumn, "id" | "title"> {}

export default function DashboardTaskCard(props: Props) {
  const taskCardQuery = useFetchTaskCard(props.id)

  return (
    <Suspensive isLoading={taskCardQuery.isLoading} fallback={<DashboardTaskCardSkeleton />}>
      <DashboardTaskCardList columnId={props.id} columnTitle={props.title} />
    </Suspensive>
  )
}
