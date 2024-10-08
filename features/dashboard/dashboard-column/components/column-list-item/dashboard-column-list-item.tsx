import { DashboardColumn } from "@shared/dashboard/types"
import { useFetchTaskCard } from "@shared/dashboard/hooks"
import DashboardColumnEditButton from "../column-edit-button/dashboard-column-edit-button"
import { DashboardTaskCard, DashboardTaskCardAddButton } from "@features/dashboard/dashboard-task-card/components"
import classes from "./dashboard-column-list-item.module.css"

export default function DashboardColumnListItem(props: DashboardColumn) {
  const taskCardQuery = useFetchTaskCard(props.id)
  if (taskCardQuery.error) throw taskCardQuery.error

  return (
    <div className={classes.column}>
      <div className={classes["column-header"]}>
        <div className={classes["column-header-info"]}>
          <h3 className={classes["column-header-info__title"]}>{props.title}</h3>
          <span className={classes["column-header-info__counter"]}>{taskCardQuery.data?.totalCount || 0}</span>
        </div>
        <DashboardColumnEditButton id={props.id} title={props.title} />
      </div>
      <div className={classes["column-add-button-layout"]}>
        <DashboardTaskCardAddButton columnId={props.id} />
      </div>
      <DashboardTaskCard id={props.id} title={props.title} />
    </div>
  )
}
