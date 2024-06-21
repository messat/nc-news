import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import getAllArticles from "../utils/api"

function Subject (){
    const {topic} = useParams()
    const [topicArr, setTopicArr] = useState([])
    useEffect(()=>{
        getAllArticles()
        .then((articlesArr)=>{
            const filterTopic = articlesArr.filter((article)=>{
                return article.topic === topic
            })
            setTopicArr(filterTopic)
        })
    }, [topic])

return <section>
<h1>Articles Sorted By {topic[0].toUpperCase() + topic.slice(1)}</h1>
<ul>
    {topicArr.map((topic)=>(
        <li key={topic.article_id} className="Article">
        <h3 className="ArticleTitle">{topic.title}</h3>
        <h4 className="ArticleAuthor">By {topic.author}</h4>
        <p>Subject: {topic.topic}</p>
        <img className="ArticleImg" src={topic.article_img_url} />
        <p>Year Published: {topic.created_at.slice(0, 4)}</p>
        <p>Comments Count: {topic.comment_count}</p>
        <p>Votes On Article: {topic.votes}</p>
        </li>
    ))}
</ul>

</section>
}

export default Subject