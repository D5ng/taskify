import { Modal, FormControl } from "@common/components/ui"
import { useForm } from "@common/hooks"
import { useFetchAllInvitaion } from "@shared/dashboard/hooks"
import { useInviteForm } from "@features/dashboard/dashboard-invite/hooks"
import { defaultValues, validate } from "@features/dashboard/dashboard-invite/logic"
import { DefaultValues } from "@features/dashboard/dashboard-invite/types"

interface Props {
  onCloseModal: () => void
}

export default function InviteModal(props: Props) {
  const inivteQuery = useFetchAllInvitaion()

  const { register, formStates, handleSubmit, fieldError, handleSetError } = useForm<DefaultValues>({
    defaultValues,
    validate: (values) => validate(values, inivteQuery.data?.invitations),
  })

  const onSubmit = useInviteForm(props.onCloseModal, handleSetError)

  const modalValues = {
    onSubmit: handleSubmit(onSubmit),
    isLoading: formStates.isSubmitting,
    isDisabled: formStates.hasFormError,
    title: "초대하기",
    onCloseModal: props.onCloseModal,
  }

  return (
    <Modal value={modalValues}>
      <Modal.Backdrop />
      <Modal.Form>
        <Modal.Title />
        <FormControl type="modal" id="email" hasError={fieldError}>
          <FormControl.Label>이메일</FormControl.Label>
          <FormControl.Input type="text" placeholder="이메일을 입력해주세요" {...register("email")} />
          <FormControl.ErrorMessage />
        </FormControl>
        <Modal.ButtonLayout>
          <Modal.OutlineButton>취소</Modal.OutlineButton>
          <Modal.PrimaryButton>초대</Modal.PrimaryButton>
        </Modal.ButtonLayout>
      </Modal.Form>
    </Modal>
  )
}
