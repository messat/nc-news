import axios from "axios"
import { useEffect, useState } from "react"
import { getAllCommentsByArticleId } from "../utils/api"

function Comments ({article_id, singleArticle}){
   const [commentsById, setCommentsById] = useState([])
useEffect(()=>{
    getAllCommentsByArticleId(article_id)
   .then(({data})=>{
    const commentsArr = data.comments
    setCommentsById(commentsArr)
   })
},[])

return <ol className="commentsList">
     <h2>Comments on {singleArticle.title}</h2>
      {commentsById.map((comment)=>(
        <li key={comment.comment_id}><h4><b>Author: </b>{comment.author}</h4>
            <h6>Date Of Comment: {comment.created_at.slice(0,10)} </h6>
            <p><b>Comment: </b> {comment.body}</p>
            <p><b>Helpful: </b>{comment.votes}</p>
        </li>
      ))}
     </ol>
}

export default Comments