import { Status, HashtagList } from "@common/components"
import classes from "./task-detail-chips.module.css"

interface Props {
  tags: string[]
}

export default function TaskDetailChips(props: Props) {
  return (
    <div className={classes.chips}>
      <Status name="To do" />
      <span className={classes.separator}></span>
      <HashtagList hashtags={props.tags} />
    </div>
  )
}
