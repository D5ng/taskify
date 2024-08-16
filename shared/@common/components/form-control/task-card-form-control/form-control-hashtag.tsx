import FormControl from "@common/components/ui/form-control"
import type { InputStates } from "@common/components/ui/form-control"
import { HashtagList } from "@common/components/hashtag"
import classes from "./form-control-hashtag.module.css"
import { HASHTAG_MAX_ARRAY_LENGTH } from "@/shared/@common/constants"
import { ChangeEventHandler, FocusEventHandler } from "react"
import { FieldElement } from "@/shared/@common/types"
import { useHashtag } from "@/shared/@common/hooks"

interface Props {
  // hashtags: string[]
  // handleDeleteHashtag?: (deleteHashtag: string) => void
  value: string[]
  hasError: (field: string) => string
  onChange: (value: string | string[]) => void
  // handleSelect: (field: string) => (value: unknown) => void
  // register: (field: string) => {
  //   value: string
  //   onBlur: FocusEventHandler<FieldElement>
  //   onChange: ChangeEventHandler<FieldElement>
  // }
  // onChange: (value: string) => void
}

export default function FormControlHashtag(props: Props) {
  // const isDisabled = props.hashtags.length >= HASHTAG_MAX_ARRAY_LENGTH

  const hashtagStates = useHashtag({ onChangeValue: props.onChange, value: props.value })

  return (
    <FormControl type="modal" id="tags" hasError={props.hasError}>
      <FormControl.Label>태그</FormControl.Label>
      <FormControl.Input
        type="text"
        // placeholder={`${isDisabled ? "태그는 최대 4개까지만 가능합니다." : "태그를 입력해 주세요"}`}
        // disabled={isDisabled}
        {...hashtagStates}
      />
      <div className={classes.hashtag}>
        <HashtagList hashtags={props.value} isEdit onDelete={hashtagStates.handleDeleteHashtag} />
      </div>
      <FormControl.ErrorMessage />
    </FormControl>
  )
}
