import FormControl from "@common/components/ui/form-control"
import type { InputStates } from "@common/components/ui/form-control"
import { HashtagList } from "@common/components/hashtag"
import classes from "./form-control-hashtag.module.css"
import { HASHTAG_MAX_ARRAY_LENGTH } from "@/shared/@common/constants"

interface Props extends InputStates {
  hashtags: string[]
  errorMessage?: string
  handleDeleteHashtag?: (deleteHashtag: string) => void
}

export default function FormControlHashtag(props: Props) {
  const errorMessage = props.errorMessage
  const isDisabled = props.hashtags.length >= HASHTAG_MAX_ARRAY_LENGTH
  return (
    <FormControl value={{ ...props, type: "modal", id: "task-hashtag" }}>
      <FormControl.Label>태그</FormControl.Label>
      <FormControl.Input
        type="text"
        placeholder={`${isDisabled ? "태그는 최대 4개까지만 가능합니다." : "태그를 입력해 주세요"}`}
        disabled={isDisabled}
      />
      <div className={classes.hashtag}>
        <HashtagList hashtags={props.hashtags} isEdit onDelete={props.handleDeleteHashtag} />
      </div>
      <FormControl.ErrorMessage>{errorMessage}</FormControl.ErrorMessage>
    </FormControl>
  )
}
