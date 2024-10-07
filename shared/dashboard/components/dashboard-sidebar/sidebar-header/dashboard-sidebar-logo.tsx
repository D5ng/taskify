import Link from "next/link"
import Image from "next/image"
import classes from "./dashboard-sidebar-logo.module.css"

export default function DashboardSideBarLogo() {
  return (
    <div className={classes.logo}>
      <Link href="/dashboard/my">
        <h1>
          <picture>
            <source media="(max-width: 767px)" srcSet="/images/logo/logo-side-bar-small.svg" />
            <Image src="/images/logo/logo-side-bar.svg" alt="내 대시보드로 이동하기" fill priority />
          </picture>
        </h1>
      </Link>
    </div>
  )
}
