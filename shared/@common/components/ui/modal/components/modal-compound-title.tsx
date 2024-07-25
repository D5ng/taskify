import { useModalContext } from ".."
import classes from "../index.module.css"

export default function Title() {
  const modalContext = useModalContext()
  return <h3 className={classes.title}>{modalContext.title}</h3>
}
