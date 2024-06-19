import { useState } from "react"
import { patchUpVotesClick, patchDownVotesClick, patchVipVotesClick } from "../../utils/api"

function Votes ({article_id, setSingleArticle}){
    const [err, setErr]= useState(null)

function upVotesClick (){
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

function downVotesClick (){
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

function vipVotesClick (){
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

if(err) return <p>Your Vote Was Not Casted. Please Try Again.</p>
return <section>
   <button className="UpVotes" onClick={()=>{
       upVotesClick()
      }}
    >👍</button> 
   <button onClick={()=>{
         downVotesClick()
   }}>👎</button> <br></br>
   <button onClick={()=>{
         vipVotesClick()
   }} className="VipEffects">👌 VIP Member</button>
   {err ? <p>Something Went Wrong. Please try Again</p>: null}
   </section>
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