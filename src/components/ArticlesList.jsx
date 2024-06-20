import ArticleCard from "./ArticleCard"
import { useContext, useEffect, useState } from "react"
import getAllArticles from "../utils/api";
import { UserContext } from "../context/UserContext";
function ArticlesList (){
    const [allArticles, setAllArticles]=useState([])
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading]= useState(null)
    const {loggedIn}= useContext(UserContext)
    useEffect(()=>{
    setIsLoading(true)
    getAllArticles()
    .then((articlesArr)=>{
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
    if(isLoading) return <h4>Loading Articles... Please Wait. We Are Fetching Data</h4>
return <ul>
    <ArticleCard allArticles={allArticles} />
</ul>

}

export default ArticlesList