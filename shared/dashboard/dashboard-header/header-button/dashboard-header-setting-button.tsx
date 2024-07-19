import SettingIcon from "@/public/images/icons/setting-icon.svg"
import ButtonLink from "@common/components/ui/button/button-link"

interface LinkWithIconProps {
  dashboardId: number
}

export default function DashboardHeaderSettingButton(props: LinkWithIconProps) {
  const style = { padding: "10px 16px" }
  return (
    <ButtonLink
      href={`/dashboard/${props.dashboardId}/edit`}
      buttonStyle="outline"
      iconUrl={SettingIcon}
      customStyle={style}
    >
      관리
    </ButtonLink>
  )
}
