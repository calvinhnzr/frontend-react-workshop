import { useAtom, useAtomValue } from "jotai"
import { allFilterTagsAtom, filterTagAtom } from "@/store"

export const Filters = () => {
  const allFilterTags = useAtomValue(allFilterTagsAtom)
  const [filterTag, setFilterTag] = useAtom(filterTagAtom)

  function handleClick(e) {
    e.preventDefault()
    const filter = e.target.textContent
    setFilterTag(filter)
  }

  return (
    <section className="filter-section p-m">
      <h2>Filter</h2>

      <FilterList title={"Schlagwörter"}>
        {allFilterTags.keywords.map((item, index) => (
          <li key={index}>
            <button
              onClick={handleClick}
              className={
                filterTag === item
                  ? "button button-primary is-active"
                  : "button button-primary"
              }
              data-js-filter=""
            >
              {item}
            </button>
          </li>
        ))}
      </FilterList>

      <div className="filter-section-actionbar ">
        <button
          onClick={() => setFilterTag()}
          className="button button-primary"
        >
          Filter löschen
        </button>
      </div>
    </section>
  )
}

const FilterList = ({ title, children }) => {
  return (
    <>
      <h3>{title}</h3>
      <ul className="horizontal-flow" data-js-category={title}>
        {children}
      </ul>
    </>
  )
}
