import { Loading } from "@common/components/ui"
import classes from "../invited-list/dashboard-invited-list.module.css"

export default function InviteLoading() {
  return (
    <div className={classes.loading}>
      <Loading />
    </div>
  )
}
