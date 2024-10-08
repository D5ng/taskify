import Link from "next/link"
import Image from "next/image"
import classes from "./landing-header.module.css"

export default function LandingHeader() {
  return (
    <header className={classes.header}>
      <div className={classes["header-inner"]}>
        <h1>
          <Image
            src="/images/logo/logo-with-title-big-white.svg"
            alt="로고"
            width={0}
            height={0}
            className={classes["header-logo"]}
          />
        </h1>
        <nav>
          <ul>
            <li>
              <Link href="/auth/signin">로그인</Link>
            </li>
            <li>
              <Link href="/auth/signup">회원가입</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
