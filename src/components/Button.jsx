import React from "react"

export const Button = (props) => {
  return (
    <li key={props.index}>
      <button
        onClick={(e) => props.handleClick(e)}
        className={
          props.filterState === props.item
            ? "button button-primary is-active"
            : "button button-primary"
        }
      >
        {props.children}
      </button>
    </li>
  )
}
