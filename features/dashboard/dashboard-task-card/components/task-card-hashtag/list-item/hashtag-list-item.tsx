import classes from "./hashtag-list-item.module.css"

interface HashtagListItemProps {
  hashtag: string
}

export default function HashtagListItem({ hashtag }: HashtagListItemProps) {
  const [value, color, background] = hashtag.split("$")
  const style = { color, background }
  return (
    <li style={style} className={classes["hashtag-list-item"]}>
      {value}
    </li>
  )
}
