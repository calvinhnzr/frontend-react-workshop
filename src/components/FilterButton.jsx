const FilterButton = (props) => {
  return (
    <li>
      <button className="button button-primary" data-js-filter="">
        {props.children || "Button"}
      </button>
    </li>
  )
}

export default FilterButton
