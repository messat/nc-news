import axios from "axios"
import ArticleCard from "./ArticleCard"
import { useEffect, useState } from "react"
function ArticlesList (){
    const [allArticles, setAllArticles]=useState([])
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading]= useState(null)

    useEffect(()=>{
    setIsLoading(true)
    axios.get(`https://be-news-api-server.onrender.com/api/articles`)
    .then(({data})=>{
        const articlesArr = data.articles.sort((a, b)=>{
           return  a.article_id -b.article_id
        })
        setIsLoading(false)
        setAllArticles(articlesArr)
        return articlesArr;
    })
    .catch((err)=>{
    setError(err)
    })
    }, [])
    if(error){
        return <p>404 Not Found. Try Again</p>
    }
    if(isLoading) return <h4>Loading... Please Wait</h4>
return <ul>
    <ArticleCard allArticles={allArticles} />
</ul>

}

export default ArticlesList