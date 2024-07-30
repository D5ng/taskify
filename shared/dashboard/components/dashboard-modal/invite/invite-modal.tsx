import React from "react"
import { FormControlEmail } from "@common/components/form-control"
import Modal from "@common/components/ui/modal"
import { useInput } from "@common/hooks"
import { emailValidation } from "@common/utils/validation"
import { useInviteForm } from "@features/dashboard/dashboard-invite/hooks"

interface Props {
  onCloseModal: () => void
}

export default function InviteModal(props: Props) {
  const inputStates = useInput(emailValidation)

  const formStates = useInviteForm({
    value: inputStates.inputValue,
    onCloseModal: props.onCloseModal,
  })

  const modalValues = {
    ...formStates,
    isDisabled: !inputStates.isValid,
    title: "초대하기",
    onCloseModal: props.onCloseModal,
  }

  return (
    <Modal value={modalValues}>
      <Modal.Backdrop />
      <Modal.Form>
        <Modal.Title />
        <FormControlEmail {...inputStates} type="modal" id="invite" />
        <Modal.ButtonLayout>
          <Modal.OutlineButton>취소</Modal.OutlineButton>
          <Modal.PrimaryButton>생성</Modal.PrimaryButton>
        </Modal.ButtonLayout>
      </Modal.Form>
    </Modal>
  )
}
