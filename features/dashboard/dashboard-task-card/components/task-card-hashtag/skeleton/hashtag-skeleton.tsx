import classes from "./hashtag-skeleton.module.css"

export default function HashtagSkeleton() {
  return <div className={`${classes["hashtag-list-item"]} skeleton`}></div>
}
