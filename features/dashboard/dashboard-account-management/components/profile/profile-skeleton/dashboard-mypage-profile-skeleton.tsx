import React from "react"
import classes from "./dashboard-mypage-profile-skeleton.module.css"

export default function DashboardMyPageProfileSkeleton() {
  return (
    <>
      <h2 className={classes.title}>프로필</h2>
      <div className={classes["profile-form"]}>
        <div className={classes["profile-form__layout"]}>
          <div className={`${classes["profile-form__image"]} skeleton`}></div>
          <div className={classes["profile-inputs"]}>
            <div>
              <div>이메일</div>
              <div className={`${classes["profile-input"]} skeleton`}></div>
            </div>
            <div>
              <div>닉네임</div>
              <div className={`${classes["profile-input"]} skeleton`}></div>
            </div>
          </div>
        </div>
        <div className={`${classes["profile-form__submit"]} skeleton`}></div>
      </div>
    </>
  )
}
