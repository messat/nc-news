import { useState } from "react"
import { patchUpVotesClick, patchDownVotesClick } from "../../utils/api"
import { BiUpvote, BiDownvote } from "react-icons/bi";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { AlertVote } from "../../atoms/MUI-Alert";


function Votes ({article_id, setSingleArticle, singleArticle}){
    const {loggedIn} = useContext(UserContext)

    const [err, setErr]= useState(null)
    const [isLoggedIn, setIsLoggedIn] = useState(true)
    const [open, setOpen] = useState(true)


function upVotesClick (){
    if(!loggedIn.username) {
        setIsLoggedIn(false)
        setOpen(true)
    } else {
    setIsLoggedIn(true) 
    patchUpVotesClick(article_id)
    .then(()=>{
        setErr(null)
    })
    .catch((err)=>{
         setErr(err)
         setSingleArticle((currentArticle)=>{
            return {...currentArticle, votes: currentArticle.votes -1}
         })
    })
    setSingleArticle((currentArticle)=>{
        return {...currentArticle, votes: currentArticle.votes + 1}
    })
    }
}

function downVotesClick (){
    if(!loggedIn.username){
        setIsLoggedIn(false)
        setOpen(true)
    } else {
    setIsLoggedIn(true)
    patchDownVotesClick(article_id)
    .then(()=>{
        setErr(null)
    })
    .catch((err)=>{
         setErr(err)
         setSingleArticle((currentArticle)=>{
            return {...currentArticle, votes: currentArticle.votes +1}
    })})
    setSingleArticle((currentArticle)=>{
        return {...currentArticle, votes: currentArticle.votes - 1}
    })
}
}



if(err) return <p>Your Vote Was Not Casted. Please Try Again.</p>

return <section className="">
    {!isLoggedIn ? <AlertVote open={open} setOpen={setOpen}/> : null}
    
    <div className="Votes">
    <BiUpvote className="Upvote" size={45} onClick={()=>{
        upVotesClick()
    }}/>
    
      {singleArticle.votes ? <p className="Count">{singleArticle.votes}</p> : <p className="Count">Vote</p>}
   <BiDownvote className="Downvote" size={45} onClick={()=>{
       downVotesClick()
    }} />
    </div>

   
   {err ? <p>Something Went Wrong. Please try Again</p>: null}
   </section>
}

export default Votes
