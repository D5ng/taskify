import { axiosInstance } from "@/config"
import { SignupResponse, SingupPostData, SigninPostData, AuthResposne, User, UpdatePassword } from "@common/types"

class AuthAPI {
  async signup(data: SingupPostData) {
    return (await axiosInstance.post<SignupResponse>("users", data)).data
  }

  async signin(data: SigninPostData) {
    return (await axiosInstance.post<AuthResposne>("auth/login", data)).data
  }

  async profileImage(data: FormData) {
    return (await axiosInstance.post<{ profileImageUrl: string }>("users/me/image", data)).data
  }

  async fetchProfile(url: string) {
    return (await axiosInstance.get<User>(url)).data
  }

  async updateProfile(url: string, { arg }: { arg: Pick<User, "nickname" | "profileImageUrl"> }) {
    return (await axiosInstance.put(url, arg)).data
  }

  async updatePassword(data: UpdatePassword) {
    return (await axiosInstance.put("auth/password", data)).data
  }

  async guestSignin() {
    return (
      await axiosInstance.post<AuthResposne>("auth/login", {
        email: "ehdgus123456@test.com",
        password: "ehdgus1234!",
      })
    ).data
  }
}

const AuthApiInstance = new AuthAPI()

export default AuthApiInstance
