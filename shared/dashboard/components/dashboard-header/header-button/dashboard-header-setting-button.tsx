import { ButtonLink } from "@common/components/ui/button"

interface LinkWithIconProps {
  dashboardId: number
}

export default function DashboardHeaderSettingButton(props: LinkWithIconProps) {
  const style = { padding: "10px 16px" }
  return (
    <ButtonLink
      href={`/dashboard/${props.dashboardId}/setting`}
      buttonStyle="outline"
      iconUrl="/images/icons/setting-icon.svg"
      customStyle={style}
    >
      관리
    </ButtonLink>
  )
}
