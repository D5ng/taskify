import classes from "./dashboard-edit-layout.module.css"

interface Props {
  title: string
  name: string
  renderPagination: JSX.Element
  renderList: JSX.Element
  renderInviteButton?: JSX.Element
}

export default function DashboardEditLayout(props: Props) {
  return (
    <>
      <div className={classes.headers}>
        <h2 className={classes.title}>{props.title}</h2>
        <div className={classes.utils}>
          {props.renderPagination}
          {props.renderInviteButton}
        </div>
      </div>
      <div className={classes.lists}>
        <span className={classes["lists-filed"]}>{props.name}</span>
        {props.renderList}
      </div>
    </>
  )
}
