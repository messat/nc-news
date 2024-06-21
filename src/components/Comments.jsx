import { useEffect, useState, useContext } from "react"
import { deleteComment, getAllCommentsByArticleId } from "../utils/api"
import PostComment from "./Forms/PostComment"
import { UserContext } from "../context/UserContext"


function Comments ({article_id, singleArticle, setSingleArticle}){
   const [commentsById, setCommentsById] = useState([])
   const [error, setError] = useState(null)
   const [isLoading, setIsLoading] =useState(null)
   const {loggedIn}= useContext(UserContext)
   const [deleteMessage, setDeleteMessage] = useState(null)
   const [errAxios, setAxios] = useState('')

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

function handleDeleteComment (comment){
    setAxios(false)
    deleteComment(comment)
    .then(()=>{
        setDeleteMessage(true)
        
        setCommentsById((arrOfComments)=>{
            const filterComments = arrOfComments.filter((commentOnID)=>{
                return commentOnID.comment_id !== comment.comment_id
            })
            return filterComments
        })
    })
    .catch((err)=>{
        setAxios(err)
        setDeleteMessage(false)
    })
}

if(errAxios.message){
    return <p>{errAxios.message}</p>
}

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
     {deleteMessage ? <p>Comment has now deleted</p> : null}
      {commentsById.map((comment)=>(
          <li key={comment.comment_id}><h4><b>Author: </b>{comment.author}</h4>
            <h6>Date Of Comment: {comment.created_at.slice(0,10)} </h6>
            <p><b>Comment: </b> {comment.body}</p>
            <p><b>Helpful: </b>{comment.votes}</p>
            {loggedIn.username === comment.author? <button onClick={()=>{
                handleDeleteComment(comment)
            }}> 🗑️ Delete Comment</button> : null}
        </li>
      ))}
     </ol>
     </section>
}

export default Comments