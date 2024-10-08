import { usePaginationContext } from "../pagination"
import classes from "../pagination.module.css"

export default function Prev() {
  const paginationContext = usePaginationContext()
  const className = `${classes[`pagination-prev`]} ${classes["pagination-button"]}`

  return (
    <button className={className} onClick={paginationContext.onPrevPage} disabled={paginationContext.currentPage === 1}>
      <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M11.2259 9.49998L5.57634 3.85046C5.42731 3.70142 5.35471 3.52402 5.35854 3.31826C5.36239 3.11248 5.43884 2.93508 5.58787 2.78606C5.73691 2.63702 5.91431 2.5625 6.12007 2.5625C6.32584 2.5625 6.50324 2.63702 6.65227 2.78606L12.3941 8.53942C12.5297 8.67499 12.6302 8.82691 12.6955 8.99518C12.7609 9.16345 12.7936 9.33172 12.7936 9.49998C12.7936 9.66824 12.7609 9.83651 12.6955 10.0048C12.6302 10.1731 12.5297 10.325 12.3941 10.4605L6.64074 16.2139C6.4917 16.3629 6.31622 16.4355 6.1143 16.4317C5.91239 16.4279 5.73691 16.3514 5.58787 16.2024C5.43884 16.0533 5.36432 15.8759 5.36432 15.6702C5.36432 15.4644 5.43884 15.287 5.58787 15.138L11.2259 9.49998Z"
          fill="#333236"
        />
      </svg>
    </button>
  )
}
