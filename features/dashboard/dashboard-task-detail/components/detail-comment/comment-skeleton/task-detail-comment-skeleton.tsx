import React from "react"

import classes from "./task-detail-comment-skeleton.module.css"
import { AvatarImageSkeleton } from "@/shared/@common/components/ui/avatar"

export default function TaskDetailCommentSkeleton() {
  return (
    <div className={classes["comment-list"]}>
      {Array(3)
        .fill(0)
        .map((_, index) => (
          <div className={classes["comment-list__item"]} key={index}>
            <AvatarImageSkeleton size="medium" />
            <div className={classes["comment-item__contents"]}>
              <div className={classes["comment-item__info"]}>
                <div className={`${classes["comment-item__nickname"]} skeleton`}></div>
                <div className={`${classes["comment-item__date"]} skeleton`}></div>
              </div>
              <p className={`${classes["comment-item__comment"]} skeleton`}></p>
              <div className={classes["comment-item__utils"]}>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}
