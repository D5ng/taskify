import Avatar from "@/shared/@common/components/ui/avatar"
import Dropdown from "@/shared/@common/components/ui/dropdown"
import FormControl from "@common/components/ui/form-control"
import type { InputStates } from "@common/components/ui/form-control"
import { useToggle } from "@common/hooks"
import { useMemberStore } from "@shared/dashboard/hooks"

export default function FormControlManager(props: InputStates) {
  const members = useMemberStore.use.members()
  const toggleStates = useToggle()

  return (
    <FormControl value={{ ...props, ...toggleStates, type: "modal", id: "task-manager" }}>
      <Dropdown>
        <Dropdown.Trigger>
          <FormControl.Label>담당자</FormControl.Label>
        </Dropdown.Trigger>
        <Dropdown.Menu>
          {members.map((member) => (
            <Dropdown.MenuItem key={member.id}>
              <Avatar nickname={member.nickname} image={member.profileImageUrl}>
                <Avatar.Image />
                <Avatar.Name />
              </Avatar>
            </Dropdown.MenuItem>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      <FormControl.ErrorMessage>유효한 이메일 형식이 아니에요.</FormControl.ErrorMessage>
    </FormControl>
  )
}
