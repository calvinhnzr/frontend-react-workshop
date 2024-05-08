import { useEffect, useState } from "react"
import { useAtom } from "jotai"

import Card from "@components/Card"
import Header from "@components/Header"
import Footer from "@components/Footer"
import { Filters } from "@components/Filters"

import { fetchData } from "@helpers/fetchData"

import { apiDataAtom, allFilterTagsAtom, filterTagAtom } from "@/store"

function App() {
  const [apiData, setApiData] = useAtom(apiDataAtom)
  const [allFilterTags, setAllFilterTags] = useAtom(allFilterTagsAtom)
  const [filterTag, setFilterTag] = useAtom(filterTagAtom)

  const url =
    "https://gist.githubusercontent.com/vschaefer/8d26be957bbc8607f60da5dd1b251a78/raw/38c62965139a156d4a605be1e046ad8278235fff/articles.json"

  useEffect(() => {
    fetchData(url).then((data) => {
      setApiData(data)

      data.articles.forEach((item) => {
        if (allFilterTags.keywords) {
          allFilterTags.keywords = allFilterTags.keywords
            .concat(item.tags.keywords)
            .filter((item, index, self) => self.indexOf(item) === index)
        } else {
          allFilterTags.keywords = item.tags.keywords
        }
      })
    })
  }, [])

  return (
    <>
      <Header />
      <main>
        <Filters />
        <section>
          <ul className="card-grid" id="article-container">
            {apiData ? (
              apiData.articles
                .filter((item) =>
                  filterTag ? item.tags.keywords.includes(filterTag) : true
                )
                .map((item, index) => <Card key={index} data={item} />)
            ) : (
              <p>Loading...</p>
            )}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
