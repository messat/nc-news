import { useContext, useState } from "react";
import { postNewComment } from "../../utils/api";
import { UserContext } from "../../context/UserContext";
function PostComment ({article_id, setCommentsById}){
    const {loggedIn} = useContext(UserContext)
    const [comment, setComment]=useState('')
    const [err, setErr]=useState(false)
    const [loadingComment, setLoadingComment] = useState(null)
    function handleComment(event){
       setComment(event.target.value)
    }
    function handleSubmit (event){
    event.preventDefault()
    const newUser = {username: loggedIn.username, body: comment}
    setErr(false)
    if(loggedIn.username){
        setLoadingComment(true)
    postNewComment(article_id, newUser)
    .then(()=>{
        setLoadingComment(false)
        setCommentsById((currentCommentsArr)=>{
            setComment('')
            return [{author: loggedIn.username, created_at: Date.now().toString(), body: comment, votes: 0},  ...currentCommentsArr]
        })
    })
    .catch(()=>{
       setErr(true)
    })
} 
}

    function handleReset(){
    setErr(false)
    }


    if(err) {
        return <section>
        <p>No username Found</p>
        <button onClick={handleReset}>Reset</button>
        </section>}

if(loadingComment) {
    setLoadingComment(false)
    return <h2>Loading... Please wait while your comment is being posted</h2>}

return (
    <section>
        <form onSubmit={handleSubmit}>
            <h3>Add Comment</h3>
            <label htmlFor="Comment">Comment: </label>
            <input type="text" id="Comment" placeholder="Add a comment..." onChange={handleComment} value={comment} required/>
            <button type="submit">Comment</button>
        </form>
        {!loggedIn.username ? <h2>Please Log In To Your Account To Post A Comment</h2> : null}
        </section>
)
}

export default PostComment