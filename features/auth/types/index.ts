export interface FormValues {
  email: string
  nickname: string
  password: string
  passwordConfirm: string
}

export interface SignupValues extends FormValues {}

export interface SigninValues extends Pick<FormValues, "email" | "password"> {
  form: string
}
