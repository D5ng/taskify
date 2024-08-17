import { Avatar, FormControl, Dropdown } from "@common/components/ui"
import { Member } from "@/shared/dashboard/types"

interface Props {
  value: Member
  onChange: (value: Member) => void
  hasError: (field: string) => string
  members: Member[]
}

export default function FormControlManager({ members, value, onChange, hasError }: Props) {
  return (
    <FormControl type="modal" id="task-manager" hasError={hasError}>
      <FormControl.Label>담당자</FormControl.Label>
      <Dropdown className="dropdown-layout-medium">
        <Dropdown.Trigger>
          <Dropdown.Select>
            <Avatar nickname={value.nickname} image={value.profileImageUrl}>
              <Avatar.Image />
              <Avatar.Name />
            </Avatar>
          </Dropdown.Select>
        </Dropdown.Trigger>
        <Dropdown.Menu size="inherit">
          {members.map((member) => (
            <Dropdown.MenuItem key={member.id} onClick={() => onChange!(member)}>
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
