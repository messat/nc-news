import { useEffect, useState, useContext } from "react"
import { deleteComment, getAllCommentsByArticleId, getAllUsers, patchDownVoteComment } from "../utils/api"
import PostComment from "./Forms/PostComment"
import { UserContext } from "../context/UserContext"
import { patchUpVoteComment } from "../utils/api";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiDislike, BiLike } from "react-icons/bi";
import Moment from "react-moment";
import PaginateComments from "../functions/CommentsPagination";
import LimitComments from "../functions/LimitComments";

function Comments ({article_id, singleArticle, setSingleArticle}){
   const [commentsById, setCommentsById] = useState([])
   const [error, setError] = useState(null)
   const [isLoading, setIsLoading] =useState(null)
   const {loggedIn}= useContext(UserContext)
   const [deleteMessage, setDeleteMessage] = useState(null)
   const [errAxios, setAxios] = useState('')
   const [users, setUsers] = useState([])
   const [commentVote, setCommentVote] = useState({})
   const [limit, setLimit] = useState(5)
   const [paginateNumberComments, setPaginateNumberComments] = useState(Math.ceil(singleArticle.comment_count/limit))
   const [page, setPage] = useState(1);

   useEffect(()=>{
        getAllUsers().then((data)=>{
            setUsers(data)
        })
   },[])

    useEffect(()=>{
        setIsLoading(true)
        getAllCommentsByArticleId(article_id, page, limit)
    .then((commentsArr)=>{
        setCommentsById(commentsArr)
        setPaginateNumberComments(()=> {
            return Math.ceil(singleArticle.comment_count/limit)
        })
        setIsLoading(false)
    })
    .catch((err)=>{
        setError(err)
    })
    },[article_id, page, limit])


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

    function handleThumbsUp (comment){
        setCommentVote(comment)
        patchUpVoteComment(comment.comment_id)
        .then(({data})=>{
            setCommentVote((currentComment)=>{
                return {...currentComment, votes: data.comment.votes}
            })
        })
    }

    function handleThumbsDown (comment){
        setCommentVote(comment)
        patchDownVoteComment(comment.comment_id)
        .then(({data})=>{
            setCommentVote((currentComment)=>{
                return {...currentComment, votes: data.comment.votes}
            })
        })
    }




function filterUser (comment){
    if(users.length){
        const filterUsername = users.filter((user)=> user.username === comment.author)

       return <div>
       <span>
        <img src={filterUsername[0].avatar_url} className="AvatarUser"/>
        <p className="AuthorComment">@{comment.author}</p>
        <Moment  className="CommentDate" fromNow>
            {comment.created_at}
        </Moment>
        <p className="CommentBody">{comment.body}</p>
        <BiLike size={30} className="ThumbsUp" onClick={()=>handleThumbsUp(comment)}/>
        <p className="VotesOnComment">{commentVote.comment_id === comment.comment_id ? commentVote.votes : comment.votes}</p>
        {loggedIn.username === comment.author ? <RiDeleteBin6Line  className="DeleteComment" size={30} onClick={()=>()=>handleDeleteComment(comment)} />: null}
        <BiDislike size={30} className="ThumbsDown" onClick={()=>handleThumbsDown(comment)}/>
       </span>
       </div>
    }
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
<ol style={{marginTop: "50px", marginLeft:"0px"}}>

     {deleteMessage ? <p>Comment has now deleted</p> : null}

        {commentsById.map((comment)=>(
            <li key={comment.comment_id} style={{marginBottom: "-1.5em"}}>
                {users.length && filterUser(comment)}
            </li>
        ))}
     </ol>

        {singleArticle.comment_count ? 
     <div style={{ display: "flex", justifyContent: "center", marginTop: "-75px", gap: "40px"}}>
     <PaginateComments page={page} setPage={setPage} paginateNumberComments={paginateNumberComments}/>
     <LimitComments limit={limit} setLimit={setLimit}/>
     </div>
     : 
     null}

     </section>
}

export default Comments