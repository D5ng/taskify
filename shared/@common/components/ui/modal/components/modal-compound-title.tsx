import { useModalContext } from "../modal"
import classes from "../modal.module.css"

export default function Title() {
  const modalContext = useModalContext()
  return <h3 className={classes.title}>{modalContext.title}</h3>
}
