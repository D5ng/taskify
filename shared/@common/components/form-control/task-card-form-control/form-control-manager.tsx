import Avatar from "@common/components/ui/avatar"
import Dropdown from "@common/components/ui/dropdown"
import FormControl from "@common/components/ui/form-control"
import { Member } from "@/shared/dashboard/types"
import { useMemberStore } from "@shared/dashboard/hooks"

interface Props {
  value: Member
  onChange: (value: Member) => void
  hasError: (field: string) => string
}

export default function FormControlManager(props: Props) {
  const members = useMemberStore.use.members()

  return (
    <FormControl type="modal" id="task-manager" hasError={props.hasError}>
      <FormControl.Label>담당자</FormControl.Label>
      <Dropdown className="dropdown-layout-medium">
        <Dropdown.Trigger>
          <Dropdown.Select>
            <Avatar nickname={props.value.nickname} image={props.value.profileImageUrl}>
              <Avatar.Image />
              <Avatar.Name />
            </Avatar>
          </Dropdown.Select>
        </Dropdown.Trigger>
        <Dropdown.Menu size="inherit">
          {members.map((member) => (
            <Dropdown.MenuItem key={member.id} onClick={() => props.onChange!(member)}>
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
