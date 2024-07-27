import React, { FormEvent } from "react"
import { Button } from "@/shared/@common/components/ui/button"

import { useAuthStore, useFetchProfile, useInput, useProfileMutation } from "@common/hooks"

import { useProfileUpload } from "@features/dashboard/dashboard-account-management/hooks"
import { FormControlEmail, FormControlNickname, FormControlProfileUpload } from "@common/components/form-control"
import { isNotEmptyValidation } from "@/shared/@common/utils/validation"
import classes from "./dashboard-mypage-profile-form.module.css"

export default function DashboardMyPageProfileForm() {
  const imageStates = useProfileUpload()
  const profileQuery = useFetchProfile()
  const profileMutation = useProfileMutation()

  const updateProfile = useAuthStore.use.updateProfile()

  const emailStates = useInput((value) => isNotEmptyValidation(value), profileQuery.data!.email)
  const nicknameStates = useInput((value) => isNotEmptyValidation(value), profileQuery.data!.nickname)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const data = {
      nickname: nicknameStates.inputValue,
      profileImageUrl: imageStates.uploadedImage || profileQuery.data!.profileImageUrl,
    }

    profileMutation.trigger(data)
    updateProfile(data)
  }

  return (
    <>
      <h2 className={classes.title}>프로필</h2>
      <form className={classes["profile-form"]} onSubmit={handleSubmit}>
        <div className={classes["profile-form__layout"]}>
          <FormControlProfileUpload
            {...imageStates}
            previewImageUrl={imageStates.previewImageUrl || profileQuery.data!.profileImageUrl}
          />
          <div className={classes["profile-inputs"]}>
            <FormControlEmail {...emailStates} type="form" id="email" disabled />
            <FormControlNickname {...nicknameStates} type="form" id="email" />
          </div>
        </div>
        <div className={classes["profile-form__submit"]}>
          <Button type="submit" buttonStyle="primary" size="small">
            저장
          </Button>
        </div>
      </form>
    </>
  )
}
