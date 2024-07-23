import FormControl from "@common/components/ui/form-control"
import type { InputStates } from "@common/components/ui/form-control"

export default function FormControlHashtag(props: InputStates & { hashtags: string[] }) {
  return (
    <FormControl value={{ ...props, type: "modal", id: "task-hashtag" }}>
      <FormControl.Label>태그</FormControl.Label>
      <FormControl.Input type="text" placeholder="제목을 입력해 주세요" />
      {/* <FormControl.Hashtag hashtags={props.hashtags} /> */}
      <FormControl.ErrorMessage>태그를 입력해 주세요.</FormControl.ErrorMessage>
    </FormControl>
  )
}
