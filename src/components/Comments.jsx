import { useEffect, useState } from "react"
import { getAllCommentsByArticleId } from "../utils/api"
import PostComment from "./Forms/PostComment"

function Comments ({article_id, singleArticle, setSingleArticle}){
   const [commentsById, setCommentsById] = useState([])
   const [error, setError] = useState(null)
   const [isLoading, setIsLoading] =useState(null)
useEffect(()=>{
    setIsLoading(true)
    getAllCommentsByArticleId(article_id)
   .then((commentsArr)=>{
    setCommentsById(commentsArr)
    setIsLoading(false)
   })
   .catch((err)=>{
    setError(err)
   })
},[article_id])

if(error) {
    return <p>404 Route Not Found</p>
}

if(isLoading){
    return <p>Loading Comments Please Wait...</p>
}

return <section>
<PostComment article_id={article_id} setSingleArticle={setSingleArticle} setCommentsById={setCommentsById}/>
<ol className="commentsList">
     <h2>Comments on {singleArticle.title}</h2>
      {commentsById.map((comment)=>(
        <li key={comment.comment_id}><h4><b>Author: </b>{comment.author}</h4>
            <h6>Date Of Comment: {comment.created_at.slice(0,10)} </h6>
            <p><b>Comment: </b> {comment.body}</p>
            <p><b>Helpful: </b>{comment.votes}</p>
        </li>
      ))}
     </ol>
     </section>
}

export default Comments