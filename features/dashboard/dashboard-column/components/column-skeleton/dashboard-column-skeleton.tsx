import React from "react"
import classes from "./dashboard-column-skeleton.module.css"
import { DashboardTaskCardSkeleton } from "@/features/dashboard/dashboard-task-card"

export default function DashboardColumnSkeleton() {
  return Array(3)
    .fill(0)
    .map((_, index) => (
      <div className={classes.column} key={index}>
        <div className={classes["column-header"]}>
          <div className={`${classes["column-header-info"]}`}>
            <div className={`${classes["column-header-info__title"]} skeleton`}></div>
            <div className={`${classes["column-header-info__counter"]} skeleton`}></div>
          </div>
          <div className={`${classes["column-edit-button-layout"]} skeleton`}></div>
        </div>
        <div className={`${classes["column-add-button-layout"]} skeleton`}></div>
        <div className={classes["column-task-card-layout"]}>
          <DashboardTaskCardSkeleton />
        </div>
      </div>
    ))
}
