import { Button } from "@common/components/ui/button"
import FormControl from "@common/components/ui/form-control"
import { useFetchProfile, useForm } from "@common/hooks"
import { Profile } from "@features/dashboard/dashboard-account-management/logic"
import { ProfileDefaultValues } from "@features/dashboard/dashboard-account-management/types"
import { useProfileForm, useProfileUpload } from "@features/dashboard/dashboard-account-management/hooks"
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

  const imageStates = useProfileUpload({ setValue })
  const onSubmit = useProfileForm()

  return (
    <>
      <h2 className={classes.title}>프로필</h2>
      <form className={classes["profile-form"]} onSubmit={handleSubmit(onSubmit)}>
        <div className={classes["profile-form__layout"]}>
          <FormControl type="form" id="profileImageUrl" hasError={fieldError}>
            <FormControl.Upload
              isLoading={imageStates.isLoading}
              previewImageUrl={formStates.formValues.profileImageUrl}
            >
              <FormControl.Input type="file" onChange={imageStates.handleUpload} />
            </FormControl.Upload>
          </FormControl>
          <div className={classes["profile-inputs"]}>
            <FormControl type="form" id="email" hasError={fieldError}>
              <FormControl.Label>이메일</FormControl.Label>
              <FormControl.Input type="text" placeholder="이메일을 입력해주세요" disabled {...register("email")} />
              <FormControl.ErrorMessage />
            </FormControl>
            <FormControl type="form" id="nickname" hasError={fieldError}>
              <FormControl.Label>닉네임</FormControl.Label>
              <FormControl.Input type="text" placeholder="닉네임을 입력해주세요" {...register("nickname")} />
              <FormControl.ErrorMessage />
            </FormControl>
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
