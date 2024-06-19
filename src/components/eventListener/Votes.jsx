// import { useEffect, useState } from "react";
import axios from "axios"
import { useState } from "react"
import { patchUpVotesClick, patchDownVotesClick, patchVipVotesClick } from "../../utils/api"

function Votes ({article_id, setSingleArticle}){
    const [err, setErr]= useState(null)

function UpvotesClick (){
    patchUpVotesClick(article_id)
    .then(()=>{
        setErr(null)
    })
    .catch((err)=>{
         setErr(err)
         alert('Please check connection')
         setSingleArticle((currentArticle)=>{
            return {...currentArticle, votes: currentArticle.votes -1}
         })
    })
    setSingleArticle((currentArticle)=>{
        return {...currentArticle, votes: currentArticle.votes + 1}
    })
}

function DownVotesClick (){
    patchDownVotesClick(article_id)
    .then(({data})=>{
        setErr(null)
    })
    .catch((err)=>{
         setErr(err)
         alert('Please check connection')
         setSingleArticle((currentArticle)=>{
            return {...currentArticle, votes: currentArticle.votes +1}
    })})
    setSingleArticle((currentArticle)=>{
        return {...currentArticle, votes: currentArticle.votes - 1}
    })
}

function VipVotesClick (){
    patchVipVotesClick(article_id)
    .then(()=>{
        setErr(null)
    })
    .catch((err)=>{
         setErr(err)
         setSingleArticle((currentArticle)=>{
            return {...currentArticle, votes: currentArticle.votes - 100}
    })})
    setSingleArticle((currentArticle)=>{
        return {...currentArticle, votes: currentArticle.votes + 100}
    })
}
return <>
   <button className="UpVotes" onClick={()=>{
       UpvotesClick()
      }}
    >👍</button> 
   <button onClick={()=>{
         DownVotesClick()
   }}>👎</button> <br></br>
   <button onClick={()=>{
         VipVotesClick()
   }} className="VipEffects">👌 VIP Member</button>
   {err ? <p>Something Went Wrong. Please try Again</p>: null}
   </>
}

export default Votes
















// function UpvotesClick (article_id){
   
//     // let votesCount = singleArticle.votes
//     // const [upvote, setUpVote] = useState(votesCount)
    
        // axios
        // .patch
        // (`https://be-news-api-server.onrender.com/api/articles/${article_id}`, {inc_votes: 1})
        // .then(({data})=>{
        //     console.log(data);
            // setSingleArticle(data)
        // })
        
//     // setSingleArticle((currentArticle)=>{
//     //     currentArticle.votes + 1
//     // })
// }

// export default UpvotesClick