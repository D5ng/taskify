import Link from "next/link"
import AuthHeader from "@features/auth/components/header/auth-header"
import SignUpForm from "@features/auth/components/form/auth-signup-form"
import { Meta } from "@common/components"
import classes from "./index.module.css"

export default function SignUpPage() {
  return (
    <section className={classes.section}>
      <Meta title="테스키파이 - 회원가입" />
      <AuthHeader />
      <SignUpForm />
      <p className={classes.pathTo}>
        이미 가입하셨나요? <Link href="/auth/signin">로그인하기</Link>
      </p>
    </section>
  )
}
