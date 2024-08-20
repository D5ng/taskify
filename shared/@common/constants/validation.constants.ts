export const formValidationPattern = {
  email: /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/,
  nickname: /^[가-힣a-zA-Z]{1,10}$/,
  password: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
  passwordConfirm: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
} as const

export const EMAIL_ERRROR_MESSAGE = {
  EMPTY: "이메일을 입력해주세요.",
  INVALID: "이메일 형식으로 작성해주세요.",
} as const

export const NICKANME_ERROR_MESSAGE = {
  EMPTY: "닉네임을 입력해주세요.",
  INVALID: "닉네임은 특수문자를 제외한 10자 이하로 작성해주세요.",
  NOT_SAME: "닉네임이 변경되지 않았습니다",
} as const

export const PASSWORD_ERROR_MESSAGE = {
  EMPTY: "비밀번호를 입력해주세요.",
  INVALID: "비밀번호는 8자 이상 입력해주세요.",
} as const

export const PASSWORD_CONFIRM_ERROR_MESSAGE = {
  EMPTY: "비밀번호를 다시 입력해주세요.",
  INVALID: "비밀번호는 8자 이상 입력해주세요.",
  CONFIRM: "비밀번호가 일치하지 않아요.",
} as const

export const DASHBOARD_TITLE_ERROR_MESSAGE = {
  EMPTY: "대시보드 이름을 입력해주세요.",
} as const
