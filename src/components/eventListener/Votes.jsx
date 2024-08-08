import { useState } from "react"
import { patchUpVotesClick, patchDownVotesClick, patchVipVotesClick } from "../../utils/api"
import { BiUpvote, BiDownvote } from "react-icons/bi";


function Votes ({article_id, setSingleArticle, singleArticle}){
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



if(err) return <p>Your Vote Was Not Casted. Please Try Again.</p>
return <section className="Votes">
    <BiUpvote className="Upvote" size={40} onClick={()=>{
       upVotesClick()
      }}/>
      {singleArticle.votes ? <p className="Count">{singleArticle.votes}</p> : <p className="Count">Vote</p>}
   <BiDownvote className="Downvote" size={40} onClick={()=>{
         downVotesClick()
   }} /> 

   



   <br></br>
   
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