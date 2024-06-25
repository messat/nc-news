import { useState } from "react"
import getAllArticles from "../utils/api"
import { Button } from "@mui/material"
import { Link } from "react-router-dom"
function NavTopics (){
    const [topics, setTopics]= useState([])
    getAllArticles()
    .then((articles)=>{
        const filterTopic = articles.map((article)=>{
            return article.topic
        })
        const uniqueTopics = filterTopic.filter((topic, index)=>{
           return filterTopic.indexOf(topic) === index
        })
        setTopics(uniqueTopics);
  
    })
return <nav>
    {topics.map((topic)=>(
        <li key={topic}>
    <Link to={`/articles/topics/${topic}`}><Button variant="contained">{topic}</Button></Link>
    </li>
    ))}
</nav>

}

export default NavTopics