import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getSingleArticle } from "../utils/api"
import IndividualArticle from "./IndividualArticle"
import LinearWithValueLabel from "./Loading/Loading-UI"
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

if(isLoading) {
  return (<div className="LoadingScreen">
      <p className="LoadingText">Loading. Please Wait . . .</p>
      <LinearWithValueLabel size={50} />
  </div>)
}
return <section>
    <IndividualArticle singleArticle={singleArticle} setSingleArticle={setSingleArticle} article_id={article_id}/>
   </section>
}

export default IdCard