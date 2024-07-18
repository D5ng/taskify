import classes from "./loading.module.css"

export default function Loading() {
  return (
    <div className={classes.loader}>
      <svg className={classes.circular} viewBox="25 25 50 50">
        <circle
          className={classes.path}
          cx="50"
          cy="50"
          r="20"
          fill="none"
          stroke="#6D6AFE"
          strokeWidth="4"
          strokeMiterlimit="10"
        />
      </svg>
    </div>
  )
}
