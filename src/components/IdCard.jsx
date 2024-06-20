import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getSingleArticle } from "../utils/api"
import IndividualArticle from "./IndividualArticle"
function IdCard (){
    const {article_id} = useParams()
    const [singleArticle, setSingleArticle]= useState({})
    const [isLoading, setIsLoading]= useState(null)
  
    useEffect(()=>{
      setIsLoading(true)
      getSingleArticle(article_id)
      .then((article)=>{
        setSingleArticle(article)
        setIsLoading(false)
        return article
      })
      .catch((err)=>{
        console.log(err)
      })
    }, [article_id])

if(isLoading) return <h4>Loading Article... Please Wait</h4>

return <ul>
    <IndividualArticle singleArticle={singleArticle} setSingleArticle={setSingleArticle} article_id={article_id}/>
   </ul>
}

export default IdCard