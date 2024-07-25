import classes from "./dashboard-member-skeleton.module.css"

export default function DashboardMemberSkeleton() {
  return Array(5)
    .fill(0)
    .map((_, index) => (
      <div className={classes.layout} key={index}>
        <div className={`${classes.flex}`}>
          <div className={`${classes.profile} skeleton`}></div>
          <div className={`${classes.username} skeleton`}></div>
        </div>
        <div className={`${classes.button} skeleton`}></div>
      </div>
    ))
}
