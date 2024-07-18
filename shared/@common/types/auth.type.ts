export interface SignupResponse {
  id: number
  email: string
  nickname: string
  profileImageUrl: string
  createdAt: string
  updatedAt: string
}

export interface SigninPostData {
  email: string
  password: string
}

export interface SingupPostData {
  email: string
  nickname: string
  password: string
}

export interface UpdatePassword {
  password: string
  newPassword: string
}

export interface User {
  email: string
  id: number
  nickname: string
  profileImageUrl: null | string
}

export interface AuthResposne {
  accessToken: string
  user: User
}

export interface AuthStore extends User {
  accessToken: string
  updateAuthState: ({ accessToken, user }: AuthResposne) => void
  updateProfile: ({ nickname, profileImageUrl }: Pick<User, "nickname" | "profileImageUrl">) => void
}
