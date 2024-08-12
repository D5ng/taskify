import React, { FormEventHandler, useEffect, useState } from "react"
import { FormControlEmail } from "@common/components/form-control"
import Modal from "@common/components/ui/modal"
import { useInput } from "@common/hooks"
import { emailValidation } from "@common/utils/validation"
import { useInviteForm } from "@features/dashboard/dashboard-invite/hooks"
import { useFetchInvitation, useInvite, useInvitePageStore } from "@/shared/dashboard/hooks"
import FormControl from "@/shared/@common/components/ui/form-control"

interface Props {
  onCloseModal: () => void
}

export default function InviteModal(props: Props) {
  const currentPage = useInvitePageStore.use.currentPage()
  const inviteMutation = useInvite(currentPage)
  const inviteQuery = useFetchInvitation(currentPage)

  const [errorMessage, setErrorMessage] = useState("")

  const handleResetError = () => setErrorMessage("")

  const handleChangeError = (errorMessage: string) => {
    setErrorMessage(errorMessage)
  }

  // resetError
  const inputStates = useInput(emailValidation, handleChangeError)

  const onSubmit: FormEventHandler = async (event) => {
    event.preventDefault()

    const existingInvite = inviteQuery.data!.invitations.find(
      (invite) => invite.invitee.email === inputStates.inputValue
    )

    if (existingInvite) {
      handleChangeError("이미 등록된 이메일이에요.")
      return
    }

    try {
      await inviteMutation.trigger({ email: inputStates.inputValue })
      props.onCloseModal()
    } catch (error) {
      handleChangeError(inviteMutation.error?.errorMessage)
    }
  }

  const modalValues = {
    onSubmit,
    isLoading: inviteMutation.isMutating,
    isDisabled: !inputStates.isValid,
    title: "초대하기",
    onCloseModal: props.onCloseModal,
  }

  console.log(errorMessage)

  return (
    <Modal value={modalValues}>
      <Modal.Backdrop />
      <Modal.Form>
        <Modal.Title />
        <FormControl value={{ ...inputStates, hasError: !!errorMessage, type: "modal", id: "invite" }}>
          <FormControl.Label>이메일</FormControl.Label>
          <FormControl.Input type="text" placeholder="이메일을 입력해주세요" />
          <FormControl.ErrorMessage>{errorMessage}</FormControl.ErrorMessage>
        </FormControl>
        <Modal.ButtonLayout>
          <Modal.OutlineButton>취소</Modal.OutlineButton>
          <Modal.PrimaryButton>초대</Modal.PrimaryButton>
        </Modal.ButtonLayout>
      </Modal.Form>
    </Modal>
  )
}
