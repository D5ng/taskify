import { FormControlEmail, FormControlNickname, FormControlProfileUpload } from "@common/components"
import { Button } from "@common/components/ui"
import { useFetchProfile, useForm } from "@common/hooks"
import { Profile } from "@features/dashboard/dashboard-account-management/logic"
import { ProfileDefaultValues } from "@features/dashboard/dashboard-account-management/types"
import { useProfileForm } from "@features/dashboard/dashboard-account-management/hooks"
import classes from "./dashboard-mypage-profile-form.module.css"

export default function DashboardMyPageProfileForm() {
  const profileQuery = useFetchProfile()
  const { register, fieldError, formStates, setValue, handleSubmit } = useForm<ProfileDefaultValues>({
    defaultValues: {
      nickname: profileQuery.data!.nickname,
      profileImageUrl: profileQuery.data!.profileImageUrl,
    },
    validate: Profile.validate,
  })

  const onSubmit = useProfileForm()

  return (
    <>
      <h2 className={classes.title}>프로필</h2>
      <form className={classes["profile-form"]} onSubmit={handleSubmit(onSubmit)}>
        <div className={classes["profile-form__layout"]}>
          <FormControlProfileUpload
            hasError={fieldError}
            previewImageUrl={formStates.formValues.profileImageUrl}
            setValue={setValue}
          />
          <div className={classes["profile-inputs"]}>
            <FormControlEmail disabled hasError={fieldError} register={register} />
            <FormControlNickname hasError={fieldError} register={register} />
          </div>
        </div>
        <div className={classes["profile-form__submit"]}>
          <Button type="submit" buttonStyle="primary" size="small" isLoading={formStates.isSubmitting}>
            저장
          </Button>
        </div>
      </form>
    </>
  )
}
