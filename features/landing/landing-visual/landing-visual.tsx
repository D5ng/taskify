import React from "react"
import classes from "./landing-visual.module.css"
import Image from "next/image"
import { ButtonLink } from "@common/components/ui"
import VisualImage from "public/images/landing/visual.png"

export default function LandingVisual() {
  return (
    <div className={classes.visual}>
      <div>
        <Image src={VisualImage} alt="테스키파이 이미지" width="0" height="0" className={classes["visual-image"]} />
      </div>
      <h2 className={classes["visual-title"]}>
        새로운 일정 관리<span>Taskify</span>
      </h2>
      <p className={classes["visual-desc"]}>
        사용자들이 태스크를 생성, 수정, 삭제하며 팀 내에서 진행 상황을 공유할 수 있는 서비스
      </p>
      <ButtonLink buttonStyle="primary" href="/signin" className={classes.link}>
        로그인 하기
      </ButtonLink>
    </div>
  )
}
