import { LandingFooter, LandingHeader, LandingMain, LandingVisual } from "@features/landing"
import classes from "./index.module.css"
import { Meta } from "@common/components"

export default function Home() {
  return (
    <div className={classes.wrapper}>
      <Meta title="테스키파이" />
      <LandingHeader />
      <LandingVisual />
      <LandingMain />
      <LandingFooter />
    </div>
  )
}
