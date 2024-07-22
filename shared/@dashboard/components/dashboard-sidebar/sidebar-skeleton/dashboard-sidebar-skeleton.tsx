import classes from "./dashboard-sidebar-skeleton.module.css"

export default function DashboardSidebarSkeleton() {
  return Array(5)
    .fill(0)
    .map((_, index) => (
      <li className={`${classes["sidebar-list-item"]}`} key={index}>
        <div className={`${classes["color-chip"]} skeleton`}></div>
        <p className={`${classes["title"]} skeleton`}></p>
      </li>
    ))
}
