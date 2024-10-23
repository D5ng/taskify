import { Avatar, FormControl, Dropdown } from "@common/components/ui"
import { Member } from "@/shared/dashboard/types"
import { useState } from "react"

interface Props {
  onChange: (assigneeUserId: number) => void
  hasError: (field: string) => string
  members: Member[]
  className?: string
  isAssigneeUserId?: number
}

export default function FormControlManager({ members, onChange, hasError, ...props }: Props) {
  const existingMember = props.isAssigneeUserId
    ? members.find((member) => member.userId === props.isAssigneeUserId) || members[0]
    : members[0]
  const [selectedMember, setSelectedMember] = useState<Member>(existingMember)
  const handleSelectedManager = (member: Member) => {
    setSelectedMember(member)
    onChange(member.userId)
  }

  return (
    <FormControl type="modal" id="task-manager" hasError={hasError} className={props.className}>
      <FormControl.Label>담당자</FormControl.Label>
      <Dropdown className="dropdown-layout-medium">
        <Dropdown.Trigger>
          <Dropdown.Select>
            <Avatar nickname={selectedMember.nickname} image={selectedMember.profileImageUrl}>
              <Avatar.Image />
              <Avatar.Name />
            </Avatar>
          </Dropdown.Select>
        </Dropdown.Trigger>
        <Dropdown.Menu size="inherit">
          {members.map((member) => (
            <Dropdown.MenuItem key={member.id} onClick={handleSelectedManager.bind(null, member)}>
              <Avatar nickname={member.nickname} image={member.profileImageUrl}>
                <Avatar.Image />
                <Avatar.Name />
              </Avatar>
            </Dropdown.MenuItem>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </FormControl>
  )
}
