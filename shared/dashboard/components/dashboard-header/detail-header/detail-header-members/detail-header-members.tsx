import { Avatar } from "@common/components/ui"
import type { Member } from "@shared/dashboard/types"
import classes from "./detail-header-members.module.css"

interface Props {
  members: Member[]
}

export default function DetailHeaderMembers(props: Props) {
  const greaterThanFiveMembers = props.members.length > 5
  const members = props.members.slice(0, 4)
  const diff = props.members.length - members.length

  console.log("??")

  return (
    <ul className={classes.members}>
      {greaterThanFiveMembers ? (
        <>
          {props.members.slice(0, 4).map((member, index) => (
            <li key={member.id} className={classes.member}>
              <Avatar nickname={member.nickname} image={member.profileImageUrl}>
                <Avatar.Image />
              </Avatar>
            </li>
          ))}
          <li key={diff} className={classes.member}>
            <div className={classes["member-count"]}>+{diff}</div>
          </li>
        </>
      ) : (
        props.members.map((member, index) => (
          <li key={member.id} className={classes.member}>
            <Avatar nickname={member.nickname} image={member.profileImageUrl}>
              <Avatar.Image />
            </Avatar>
          </li>
        ))
      )}
    </ul>
  )
}
