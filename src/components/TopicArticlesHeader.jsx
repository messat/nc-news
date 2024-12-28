import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import getAllArticles from "../utils/api"
import TopicsPage from "./TopicsPage"
import LinearWithValueLabel from "./Loading/Loading-UI"

function TopicArticlesHeader (){
    let {topic} = useParams()

    const [topicArticles, setTopicArticles] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    useEffect(()=>{
        setIsLoading(true)
        getAllArticles(topic)
        .then((data)=>{
            setTopicArticles(data)
            setIsLoading(false)
        })
        .catch((err) =>{
            console.log(err)
            setIsLoading(false)
        })
    }, [topic])

if(isLoading) {
        return (<div className="LoadingScreen">
            <p className="LoadingText">Loading. Please Wait . . . while we fetch your content<br></br>This website is using the free version of Render.</p>
            < LinearWithValueLabel size={50} />
        </div>)
}

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