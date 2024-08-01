import Avatar from "@common/components/ui/avatar"
import type { Member } from "@shared/dashboard/types"
import classes from "./dashboard-header-members.module.css"

interface Props {
  members: Member[]
}

export default function DashboardHeaderMembers(props: Props) {
  return (
    <ul className={classes.members}>
      {props.members.map((member) => (
        <li key={member.id} className={classes.member}>
          <Avatar nickname={member.nickname} image={member.profileImageUrl}>
            <Avatar.Image />
          </Avatar>
        </li>
      ))}
    </ul>
  )
}
