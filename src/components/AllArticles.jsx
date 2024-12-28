import { useEffect, useState } from "react"
import ArticleCards from "../atoms/MUI-Card/MUI-Card"
import {filterArticlesBySort, paginateArticles}  from "../utils/api"
import BasicPagination from "../functions/Pagination"
import SelectLimit from "../functions/SelectLimit"
import LoadingCircularProgress from "./Loading/CircularLoading"

function AllNewsArticles ({allArticles, sortBy, orderBy}){
  const [sortArticles, setSortArticles] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(9)
  let total = allArticles.length
  const [paginatedNumber, setPaginatedNumber] = useState(Math.ceil(total/limit))
  const totalPages = Math.ceil(total / limit);

  useEffect(()=>{
    setIsLoading(true)
    paginateArticles(page, limit)
    .then((data) => {
      setIsLoading(false)
      setSortArticles(data)
      setPaginatedNumber(totalPages)
      if (page > totalPages) {
        setPage(totalPages);
      }
    })
    .catch((err) => {
      setIsLoading(false)
      console.log(err)
    })
  }, [page, limit])

  useEffect(() => {
    if(sortBy || orderBy){
      setIsLoading(true)
    filterArticlesBySort(sortBy, orderBy)
    .then((data)=>{
      setIsLoading(false)
      setSortArticles(data)
    })
    .catch((err)=> {
      setIsLoading(false)
      console.log(err)
    })
  }}
  , [sortBy, orderBy])

if(isLoading) return <LoadingCircularProgress />

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