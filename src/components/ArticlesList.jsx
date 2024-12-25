import ArticleCard from "./ArticleCard"
import { useEffect, useState } from "react"
import getAllArticles from "../utils/api";
import LinearWithValueLabel from "./Loading/Loading-UI";
import AllNewsArticles from "./AllArticles";
import SelectVariants from "../functions/SortBy";
function ArticlesList (){
    const [allArticles, setAllArticles]=useState([])
    const [sortBy, setSortBy ] = useState('');
    const [orderBy, setOrderBy] = useState('')

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
        .catch((err)=>{
        setErr(err)
        setIsLoading(false)
        })
    }, [])

    if(err){
        return <p className="Error-Message">404 Not Found. Try Again</p>
    }
    
    if(isLoading) {
        return (<div className="LoadingScreen">
            <p className="LoadingText">Loading. Please Wait . . . while we fetch your content<br></br>This website is using the free version of Render.</p>
            < LinearWithValueLabel size={50} />
        </div>)
    }

return <ul>
    <ArticleCard allArticles={allArticles} />
    <SelectVariants sortBy={sortBy} setSortBy={setSortBy} orderBy={orderBy} setOrderBy={setOrderBy}/>
    <AllNewsArticles allArticles={allArticles} sortBy={sortBy} orderBy={orderBy}/>
</ul>

}

export default ArticlesList