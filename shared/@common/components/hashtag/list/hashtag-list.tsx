import HashtagListItem from "../list-item/hashtag-list-item"
import classes from "./hashtag-list.module.css"

interface HashtagListProps {
  hashtags: string[]
  isEdit?: boolean
  onDelete?: (deleteHashtag: string) => void
}

export default function HashtagList(props: HashtagListProps) {
  return (
    <ul className={classes["hashtag-list"]}>
      {props.hashtags.map((hashtag) => (
        <HashtagListItem key={hashtag} hashtag={hashtag} isEdit={props.isEdit} onDelete={props.onDelete} />
      ))}
    </ul>
  )
}
