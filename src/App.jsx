import { useEffect, useState } from "react"

import Header from "@components/Header"
import Footer from "@components/Footer"

import { Card, DefaultCard } from "@components/Card"
import { Button } from "@components/Button"

import { fetchData } from "@helpers/fetchData"

function App() {
  const [dataState, setDataState] = useState(0)
  const [keywordsState, setKeywordsState] = useState([])
  const [filterState, setFilterState] = useState("")

  const url =
    "https://gist.githubusercontent.com/vschaefer/8d26be957bbc8607f60da5dd1b251a78/raw/38c62965139a156d4a605be1e046ad8278235fff/articles.json"

  useEffect(() => {
    fetchData(url).then((data) => {
      setDataState(data)

      setKeywordsState(
        data.articles
          .map((item) => item.tags.keywords)
          .flat()
          .filter((item, index, self) => self.indexOf(item) === index)
      )
    })
  }, [])

  function handleClick(e) {
    e.preventDefault()
    const filter = e.target.textContent

    setFilterState(filter)
  }

  useEffect(() => {
    console.log(filterState)
  }, [filterState])

  return (
    <>
      <Header />
      <Main>
        <FilterSection>
          <h2>Filter</h2>
          <h3>Schlagwörter</h3>
          <ul className="horizontal-flow">
            {keywordsState.map((item, index) => (
              <Button
                key={index}
                item={item}
                filterState={filterState}
                handleClick={handleClick}
              >
                {item}
              </Button>
            ))}
          </ul>
          <div className="filter-section-actionbar ">
            <button
              onClick={() => setFilterState()}
              className="button button-primary"
            >
              Filter löschen
            </button>
          </div>
        </FilterSection>
        <CardSection>
          <h2>Beiträge</h2>
          <ul className="card-grid">
            {/* <DefaultCard /> */}
            {dataState ? (
              dataState.articles
                .filter((item) =>
                  filterState ? item.tags.keywords.includes(filterState) : true
                )
                .map((item, index) => (
                  <Card key={index} data={item} filterState={filterState} />
                ))
            ) : (
              <p>Loading...</p>
            )}
          </ul>
        </CardSection>
      </Main>
      <Footer />
    </>
  )
}

export default App

const Main = (props) => {
  return <main>{props.children}</main>
}

const FilterSection = (props) => {
  return <section className="filter-section p-m">{props.children}</section>
}

const CardSection = (props) => {
  return <section>{props.children}</section>
}
