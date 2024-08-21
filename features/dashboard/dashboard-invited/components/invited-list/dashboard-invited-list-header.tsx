import classes from "./dashboard-invited-list-header.module.css"

export default function DashboardInviteListHeader() {
  return (
    <div className={classes["list-header"]}>
      <span>이름</span>
      <span>초대자</span>
      <span>수락 여부</span>
    </div>
  )
}
