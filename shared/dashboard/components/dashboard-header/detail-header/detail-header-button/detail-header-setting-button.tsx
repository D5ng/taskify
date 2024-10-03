import { ButtonLink } from "@common/components/ui/button"
import classes from "./detail-header-button.module.css"

interface LinkWithIconProps {
  dashboardId: number
}

export default function DetailHeaderSettingButton(props: LinkWithIconProps) {
  return (
    <ButtonLink
      href={`/dashboard/${props.dashboardId}/setting`}
      buttonStyle="outline"
      iconUrl="/images/icons/setting-icon.svg"
      className={classes.padding}
    >
      관리
    </ButtonLink>
  )
}
