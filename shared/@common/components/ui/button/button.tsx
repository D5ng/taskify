import Image from "next/image"
import { Loading } from "../loading"
import { ButtonProps } from "./button.type"
import classes from "./button.module.css"

export default function Button(props: ButtonProps) {
  const className = `${classes.button} ${props.size && classes[props.size]} ${classes[props.buttonStyle]} ${
    props.fontColor && classes[props.fontColor]
  }
  `

  return (
    <button
      className={className}
      style={props.customStyle}
      disabled={props.isDisabled || props.isLoading}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.iconUrl && (
        <div className={classes["icon-wrapper"]}>
          <Image src={props.iconUrl} alt="" fill />
        </div>
      )}
      {props.isLoading ? <Loading /> : props.children}
    </button>
  )
}
