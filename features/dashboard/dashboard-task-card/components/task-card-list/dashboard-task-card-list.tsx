import { useFetchTaskCard } from "@shared/dashboard/hooks"
import { DashboardTaskCardListItem } from "@features/dashboard/dashboard-task-card/components"
import classes from "./dashboard-task-card-list.module.css"

interface Props {
  columnId: number
}

export default function DashboardTaskCardList(props: Props) {
  const taskCardQuery = useFetchTaskCard(props.columnId)

  return (
    <ul className={classes["column-task-card-layout"]}>
      {taskCardQuery.data!.cards.map((card) => (
        <DashboardTaskCardListItem key={card.id} {...card} />
      ))}
    </ul>
  )
}
