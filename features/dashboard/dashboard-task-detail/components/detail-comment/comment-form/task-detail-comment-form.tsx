import React, { FormEvent } from "react"

import classes from "./task-detail-comment-form.module.css"

import { Button } from "@/shared/@common/components/ui/button"
import FormControl, { InputStates } from "@/shared/@common/components/ui/form-control"

interface Props {
  id: string
  isLoading: boolean
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
  inputState: InputStates
}

export default function TaskDetailCommentForm({ inputState, onSubmit, isLoading, id }: Props) {
  return (
    <form className={classes.comments} onSubmit={onSubmit}>
      <FormControl value={{ ...inputState, type: "", id: id }}>
        <FormControl.TextArea placeholder="댓글 작성하기" />
      </FormControl>
      <div className={classes["comments-button"]}>
        <Button buttonStyle="secondary" size="small" type="submit" isLoading={isLoading}>
          입력
        </Button>
      </div>
    </form>
  )
}
