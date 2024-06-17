import axios from "axios"
import { useEffect, useState } from "react"
function ArticlesList (){
    const [allArticles, setAllArticles]=useState([])
    const [error, setError] = useState(null);
    useEffect(()=>{
    axios.get(`https://be-news-api-server.onrender.com/api/articles`)
    .then(({data})=>{
        const articlesArr = data.articles.sort((a, b)=>{
           return  a.article_id -b.article_id
        })
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
return <ul>
    {allArticles.length ? allArticles.map((article)=>(
        <li key={article.article_id} className="Article">
            <h3 className="ArticleTitle">{article.title}</h3>
            <h4 className="ArticleAuthor">By {article.author}</h4>
            <img className="ArticleImg" src={article.article_img_url} />
            <p className="ArticleTopic">Subject: {article.topic}</p>
            <p className="ArticleComCount">Comments Count: {article.comment_count}</p>
            <p className="ArticlePublished">Year Published: {article.created_at.slice(0, 4)}</p>
            <p className="ArticlePublished">Votes On Article: {article.votes}</p>
            <p className="ArticlePublished">Article ID: {article.article_id}</p>
            </li>
    )):<p></p>}
</ul>

}

export default ArticlesList