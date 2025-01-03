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
import CommentDeleteAlert from "./Alerts/DeleteCommentAlert";
import LoadingCircularProgress from "./Loading/CircularLoading";

function Comments ({article_id, singleArticle, setSingleArticle}){
    const {loggedIn}= useContext(UserContext)
   const [commentsById, setCommentsById] = useState([])

   const [error, setError] = useState(null)
   const [isLoading, setIsLoading] =useState(false)
   const [errAxios, setAxios] = useState('')

   const [deleteMessage, setDeleteMessage] = useState(null)
   const [users, setUsers] = useState([])
   const [commentVote, setCommentVote] = useState({})

   const [limit, setLimit] = useState(5)
   const [paginateNumberComments, setPaginateNumberComments] = useState(Math.ceil(singleArticle.comment_count/limit))
   const [page, setPage] = useState(1);

   useEffect(()=>{
        getAllUsers()
        .then((data)=>{
            setUsers(data)
        })
        .catch((err) => {
            console.log(err)
        })
   },[])

    useEffect(()=>{
        setIsLoading(true)
        getAllCommentsByArticleId(article_id, page, limit)
        .then((commentsArr)=>{
            setIsLoading(false)
            setCommentsById(commentsArr)
            setPaginateNumberComments(()=> {
            return Math.ceil(singleArticle.comment_count/limit)
        })
        })
        .catch((err)=>{
            setError(err)
            console.log(err)
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
        <BiDislike size={30} className="ThumbsDown" onClick={()=>handleThumbsDown(comment)}/>
        {loggedIn.username === comment.author ? 
        <RiDeleteBin6Line  className="DeleteComment" size={30} onClick={()=> handleDeleteComment(comment)}/>
        : null}
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

if(isLoading) return <LoadingCircularProgress />


return <section>
        <PostComment article_id={article_id} setSingleArticle={setSingleArticle} setCommentsById={setCommentsById}/>
        <ol style={{marginTop: "50px", marginLeft:"0px"}}>

        {deleteMessage ? <CommentDeleteAlert />: null}

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