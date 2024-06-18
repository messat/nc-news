import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import ArticleCard from "./ArticleCard"
function ArticleIdCard (){
    const {article_id} = useParams()
    const [singleArticle, setSingleArticle]= useState({})
    const [isLoading, setIsLoading]= useState(null)
    
    useEffect(()=>{
      setIsLoading(true)
      axios.get(`https://be-news-api-server.onrender.com/api/articles/${article_id}`)
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
    <ArticleCard singleArticle={singleArticle}/>
   </ul>
}

export default ArticleIdCard