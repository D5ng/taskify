import { HashtagSkeleton } from "@common/components"
import { AvatarImageSkeleton } from "@common/components/ui"
import classes from "./dashboard-task-card-skeleton.module.css"

export default function DashboardTaskCardSkeleton() {
  return Array(3)
    .fill(0)
    .map((_, index) => (
      <div className={`${classes["task-card-layout"]}`} key={index}>
        <div className={`${classes["task-card-thumbnail"]} skeleton`}></div>
        <div className={`${classes["task-card-title"]} skeleton`}></div>
        <div className={classes["task-card-hashtag-list"]}>
          <HashtagSkeleton />
          <HashtagSkeleton />
          <HashtagSkeleton />
        </div>
        <div className={classes["task-card-info"]}>
          <div className={`${classes["task-card-info-date-layout"]} skeleton`}></div>
          <AvatarImageSkeleton />
        </div>
      </div>
    ))
}
