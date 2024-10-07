import Link from "next/link"
import AuthHeader from "@features/auth/components/header/auth-header"
import SignInForm from "@features/auth/components/form/auth-signin-form"
import { Meta } from "@common/components"
import classes from "./index.module.css"

export default function SignUpPage() {
  return (
    <section className={classes.section}>
      <Meta title="테스키파이 - 로그인" />
      <AuthHeader />
      <SignInForm />
      <p className={classes.pathTo}>
        회원이 아니신가요? <Link href="/auth/signup">회원가입하기</Link>
      </p>
    </section>
  )
}
