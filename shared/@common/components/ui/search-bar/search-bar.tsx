import React from "react"
import classes from "./search-bar.module.css"

export default function SearchBar() {
  return (
    <div className={classes.searchBar}>
      <input type="text" placeholder="검색" />
    </div>
  )
}
