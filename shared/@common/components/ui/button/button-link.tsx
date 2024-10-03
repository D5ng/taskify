import Link from "next/link"
import Image from "next/image"
import { ButtonLinkProps } from "./button.type"
import classes from "./button.module.css"

export default function ButtonLink(props: ButtonLinkProps) {
  const className = `${classes.button} ${props.size && classes[props.size]} ${classes[props.buttonStyle]}`

  return (
    <Link className={`${className} ${props.className}`} href={props.href}>
      {props.iconUrl && (
        <div className={classes["icon-wrapper"]}>
          <Image src={props.iconUrl} alt="" fill />
        </div>
      )}
      {props.children}
    </Link>
  )
}
