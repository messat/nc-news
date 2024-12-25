import { useEffect, useState } from "react"
import ArticleCards from "../atoms/MUI-Card/MUI-Card"
import {filterArticlesBySort}  from "../utils/api"

function AllNewsArticles ({sortBy, orderBy}){
  const [sortArticles, setSortArticles] = useState([])

  useEffect(() => {
    filterArticlesBySort(sortBy, orderBy)
    .then((data)=>{
      setSortArticles(data)
    })
    .catch((err)=> {
      console.log(err)
    })
  }, [sortBy, orderBy])


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

  </section>

}

export default AllNewsArticles