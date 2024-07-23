import classes from "./dashboard-list-skeleton.module.css"

export default function DashboardListSkeleton() {
  return Array(5)
    .fill(0)
    .map((_, index) => (
      <li key={index}>
        <div className={`${classes["dashboard-list-item"]}`}>
          <div className={`${classes["dashboard-list-item__title"]} skeleton`}></div>
          <div className={`${classes["dashboard-list-item__image"]} skeleton`}></div>
        </div>
      </li>
    ))
}
