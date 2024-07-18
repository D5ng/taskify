import Image from "next/image"
import classes from "./auth-header.module.css"

export default function AuthHeader() {
  return (
    <>
      <div className={classes["image-wrapper"]}>
        <Image src="images/logo/logo-with-title-big.svg" alt="테스키파이" fill />
      </div>
      <p className={classes["form-info"]}>첫 방문을 환영합니다!</p>
    </>
  )
}
