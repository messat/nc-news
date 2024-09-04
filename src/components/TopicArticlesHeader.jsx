import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import getAllArticles from "../utils/api"
import TopicsPage from "./TopicsPage"

function TopicArticlesHeader (){
    let {topic} = useParams()
    const [topicArticles, setTopicArticles] = useState([])
    useEffect(()=>{
        getAllArticles(topic)
        .then((data)=>{
            setTopicArticles(data)
        })
    }, [topic])

return (<section className="container">
    <header>
        <hr className="HorizontalLine"></hr> 
        <h1 className="TopicHeading">{topic.slice(0,1).toUpperCase() + topic.slice(1)}</h1> 
      
        <hr></hr>
    </header>
    <h3 className="Headline">Latest News</h3>
    <TopicsPage topicArticles={topicArticles}/>
    </section>
    )
}

export default TopicArticlesHeader