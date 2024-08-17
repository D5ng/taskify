import { FormControl } from "@common/components/ui"
import { HashtagList } from "@common/components/hashtag"
import { useHashtag } from "@common/hooks"
import { HASHTAG_MAX_ARRAY_LENGTH } from "@common/constants"
import classes from "./form-control-hashtag.module.css"

interface Props {
  value: string[]
  hasError: (field: string) => string
  onChange: (value: string[]) => void
}

export default function FormControlHashtag(props: Props) {
  const hashtagStates = useHashtag({ onChangeValue: props.onChange, value: props.value })
  const isDisabled = props.value.length >= HASHTAG_MAX_ARRAY_LENGTH

  return (
    <FormControl type="modal" id="tags" hasError={props.hasError}>
      <FormControl.Label>태그</FormControl.Label>
      <FormControl.Input
        type="text"
        placeholder={`${isDisabled ? "태그는 최대 4개까지만 가능합니다." : "태그를 입력해 주세요"}`}
        disabled={isDisabled}
        {...hashtagStates}
      />
      <div className={classes.hashtag}>
        <HashtagList hashtags={props.value} isEdit onDelete={hashtagStates.handleDeleteHashtag} />
      </div>
      <FormControl.ErrorMessage />
    </FormControl>
  )
}
