import { useAtom } from "jotai"
import { allFilterTagsAtom, filterTagAtom } from "@/store"
import { useEffect } from "react"

export const Filters = () => {
  const [allFilterTags, setAllFilterTags] = useAtom(allFilterTagsAtom)
  const [filterTag, setFilterTag] = useAtom(filterTagAtom)

  function handleClick(e) {
    e.preventDefault()
    const filter = e.target.textContent
    const category = e.target.parentElement.parentElement.dataset.jsCategory
    // setFilterTag({ [category]: filter })
    setFilterTag(filter)
  }

  useEffect(() => {
    console.log(filterTag)
  }, [filterTag])

  return (
    <section className="filter-section p-m">
      <h2>Filter</h2>

      {allFilterTags &&
        Object.keys(allFilterTags).map((key, index) => {
          return (
            <FilterList key={index} title={key}>
              {allFilterTags[key].map((item, index) => (
                <li key={index}>
                  <button
                    onClick={handleClick}
                    // className="button button-primary"
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
          )
        })}
      <div className="filter-section-actionbar ">
        <button
          onClick={() => setFilterTag()}
          className="button button-primary"
        >
          Filter löschen
        </button>
        <button className="button button-secondary is-hidden">
          Filter Anwenden
        </button>
      </div>
    </section>
  )
}

export const FilterList = ({ title, children }) => {
  return (
    <>
      <h3>{title}</h3>
      <ul className="horizontal-flow" data-js-category={title}>
        {children}
      </ul>
    </>
  )
}
