import Avatar from "@/shared/@common/components/ui/avatar"
import Dropdown from "@/shared/@common/components/ui/dropdown"
import { Member } from "@/shared/dashboard/types"
import FormControl from "@common/components/ui/form-control"
import type { InputStates } from "@common/components/ui/form-control"
import { useToggle } from "@common/hooks"
import { useMemberStore } from "@shared/dashboard/hooks"

interface Props extends InputStates<Member> {}

export default function FormControlManager(props: Props) {
  const members = useMemberStore.use.members()
  const toggleStates = useToggle()

  return (
    <FormControl value={{ ...props, ...toggleStates, type: "modal", id: "task-manager" }}>
      <FormControl.Label>담당자</FormControl.Label>
      <Dropdown className="dropdown-layout-medium">
        <Dropdown.Trigger>
          <Dropdown.Select>
            <Avatar nickname={props.inputValue.nickname} image={props.inputValue.profileImageUrl}>
              <Avatar.Image />
              <Avatar.Name />
            </Avatar>
          </Dropdown.Select>
        </Dropdown.Trigger>
        <Dropdown.Menu size="inherit">
          {members.map((member) => (
            <Dropdown.MenuItem key={member.id} onClick={() => props.handleClick!(member)}>
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
