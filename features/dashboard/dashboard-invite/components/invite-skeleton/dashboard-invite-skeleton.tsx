import classes from "./dashboard-invite-skeleton.module.css"

export default function DashboardInvitationSkeleton() {
  return Array(5)
    .fill(0)
    .map((_, index) => (
      <div className={`${classes.layout}`} key={index}>
        <div className={`${classes.text} skeleton`}></div>
        <div className={`${classes.button} skeleton`}></div>
      </div>
    ))
}
