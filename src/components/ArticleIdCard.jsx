import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import ArticleCard from "./ArticleCard"
import { getSingleArticle } from "../utils/api"
function ArticleIdCard (){
    const {article_id} = useParams()
    const [singleArticle, setSingleArticle]= useState({})
    const [isLoading, setIsLoading]= useState(null)
  
    useEffect(()=>{
      setIsLoading(true)
      getSingleArticle(article_id)
      .then(({data})=>{
        const article = data.article;
        setSingleArticle(article)
        setIsLoading(false)
        return article
      })
      .catch((err)=>{
        console.log(err)
      })
    }, [article_id])

if(isLoading) return <h4>Loading... Please Wait</h4>

return <ul>
    <ArticleCard singleArticle={singleArticle} article_id={article_id}/>
   </ul>
}

export default ArticleIdCard