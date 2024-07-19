import { Member } from "@/shared/@common/types"
import Avatar from "@/shared/@common/components/ui/avatar-compound/avatar"
import classes from "./dashboard-header-members.module.css"

interface Props {
  members: Member[]
}

export default function DashboardHeaderMembers(props: Props) {
  return (
    <ul className={classes.members}>
      {props.members.map((member, index) => (
        <li
          key={member.id}
          className={classes.member}
          style={{
            transform: `translateX(-${index * 8}px)`,
          }}
        >
          <Avatar nickname={member.nickname} image={member.profileImageUrl}>
            <Avatar.Image />
          </Avatar>
        </li>
      ))}
    </ul>
  )
}
