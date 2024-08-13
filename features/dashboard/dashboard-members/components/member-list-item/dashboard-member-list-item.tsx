import Avatar from "@/shared/@common/components/ui/avatar"
import { Button } from "@/shared/@common/components/ui/button"
import { Member } from "@/shared/dashboard/types"
import classes from "./dashboard-member-list-item.module.css"

export default function DashboardMemberListItem(props: Member) {
  return (
    <div className={classes["list-layout"]}>
      <div className={classes["list-layout__profile"]}>
        <Avatar nickname={props.nickname} image={props.profileImageUrl}>
          <Avatar.Image />
          <Avatar.Name />
        </Avatar>
      </div>
      <div>
        <Button buttonStyle="secondary" size="small">
          삭제
        </Button>
      </div>
    </div>
  )
}
