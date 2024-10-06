import Image from "next/image"
import Link from "next/link"
import InstagramIcon from "public/images/landing/instagram.svg"
import MailIcon from "public/images/landing/email.svg"
import FacebookIcon from "public/images/landing/facebook.svg"
import classes from "./landing-footer.module.css"

export default function LandingFooter() {
  return (
    <footer className={classes.footer}>
      <div className={classes["footer-copyright"]}>©codeit - 2023</div>
      <ul className={classes["footer-menu"]}>
        <li>
          <Link href="/">Privacy Policy</Link>
        </li>
        <li>
          <Link href="/">FAQ</Link>
        </li>
      </ul>
      <ul className={classes["footer-sns"]}>
        <li>
          <Link href="/">
            <Image src={MailIcon} alt="메일 보내기" width="20" height="20" />
          </Link>
        </li>
        <li>
          <Link href="/">
            <Image src={FacebookIcon} alt="페이스북 바로가기" width="22" height="22" />
          </Link>
        </li>
        <li>
          <Link href="/">
            <Image src={InstagramIcon} alt="인스타그램 바로가기" width="22" height="22" />
          </Link>
        </li>
      </ul>
    </footer>
  )
}
