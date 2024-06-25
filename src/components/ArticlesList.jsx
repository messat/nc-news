import ArticleCard from "./ArticleCard"
import { useEffect, useState } from "react"
import getAllArticles from "../utils/api";
function ArticlesList (){
    const [allArticles, setAllArticles]=useState([])
    const [err, setErr] = useState(null);
    const [isLoading, setIsLoading]= useState(null)
    useEffect(()=>{
    setIsLoading(true)
    getAllArticles()
    .then((articlesArr)=>{
        setIsLoading(false)
        setAllArticles(articlesArr)
        return articlesArr;
    })
    .catch((err)=>{3
    setErr(err)
    })
    }, [])
    if(err){
        console.log(err)
        return <p>404 Not Found. Try Again</p>
    }
    if(isLoading) return <h4>Loading Articles... Please Wait. We Are Fetching Data</h4>
return <ul>
    <ArticleCard allArticles={allArticles} />
</ul>

}

export default ArticlesList