import { LandingFooter, LandingHeader, LandingMain, LandingVisual } from "@features/landing"
import classes from "./index.module.css"

export default function Home() {
  return (
    <div className={classes.wrapper}>
      <LandingHeader />
      <LandingVisual />
      <LandingMain />
      <LandingFooter />
    </div>
  )
}
