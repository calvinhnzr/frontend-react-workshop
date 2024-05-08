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

      data.articles.map((item) => {
        Object.keys(item.tags).forEach((key) => {
          if (allFilterTags[key]) {
            allFilterTags[key] = allFilterTags[key]
              .concat(item.tags[key])
              .filter((item, index, self) => self.indexOf(item) === index)
          } else {
            allFilterTags[key] = item.tags[key]
          }
        })
      })
    })
  }, [])

  return (
    <>
      <Header />
      <main>
        <Filters />
        <section>
          {apiData ? (
            <ul className="card-grid" id="article-container">
              {filterTag
                ? apiData.articles
                    .filter((article) =>
                      article.tags.keywords.includes(filterTag)
                    )
                    .map((article) => <Card key={article.id} data={article} />)
                : apiData.articles.map((article) => (
                    <Card key={article.id} data={article} />
                  ))}
            </ul>
          ) : (
            <p>Loading...</p>
          )}
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
