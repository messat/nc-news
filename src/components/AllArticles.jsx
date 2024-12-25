import { useEffect, useState } from "react"
import ArticleCards from "../atoms/MUI-Card/MUI-Card"
import {filterArticlesBySort, paginateArticles}  from "../utils/api"
import BasicPagination from "../functions/Pagination"
import SelectLimit from "../functions/SelectLimit"

function AllNewsArticles ({allArticles, sortBy, orderBy}){
  const [sortArticles, setSortArticles] = useState([])
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(9)
  const [paginatedNumber, setPaginatedNumber] = useState(Math.ceil(allArticles.length/9))
  const total = allArticles.length
  useEffect(()=>{
    paginateArticles(page, limit)
    .then((data) => {
      setSortArticles(data)
      setPaginatedNumber(() => {
        return Math.ceil(allArticles.length/data.length)
      })
    })
    .catch((err) => {
      console.log(err)
    })
  }, [page, limit])

  useEffect(() => {
    if(sortBy || orderBy){
    filterArticlesBySort(sortBy, orderBy)
    .then((data)=>{
      setSortArticles(data)
    })
    .catch((err)=> {
      console.log(err)
    })
  }}
  , [sortBy, orderBy])


    return <section className="ArticleCards container">

      {sortArticles.length ? 
      <div className="ArticleCardsContainer" style={{display: "flex", justifyContent: "space-around", gap: "20px", flexWrap: "wrap"}}>
      {sortArticles.map((article)=>(
          <li key={article.article_id} >
          <ArticleCards article={article} />
          </li>
      ))}
      </div>
      : null}

      <BasicPagination page={page} setPage={setPage} paginatedNumber={paginatedNumber}/>
      <SelectLimit setLimit={setLimit}/>
  </section>

}

export default AllNewsArticles