import { useState } from "react";
import { getAllUsers, postNewComment } from "../../utils/api";


function PostComment ({article_id, setSingleArticle}){
    const [user, setUser]=useState('')
    const [comment, setComment]=useState('')
    // const [userMatch, setUserMatch]=useState('')
    const [nonUserMatch, setNonUserMatch] = useState('')
    function handleComment(event){
       setComment(event.target.value)
    }

    function handleUser (event){
        setUser(event.target.value);
    }

    function CommentPost (event){
    event.preventDefault()
    getAllUsers().then((usersArr)=>{
        const selectUser = usersArr.filter((singleUser)=>{
            if(singleUser.username === user){
            return singleUser
            }  
        })
        {selectUser.length ? null : setNonUserMatch(user)}
        // setUserMatch(selectUser[0].username)
        return selectUser
    })
// invoke fetch all users ✅
//if user is equal to any of the user, .map .includes ✅
//if not valid user then display the alert on the page 

//post the comment on the page optimistic render
//post method on backend afterwards

//setComment and Set user to reset once the comment has been posted using the value in the input box
    }

    if(nonUserMatch){
        return  <p>Please Enter a Valid Username: <b>{nonUserMatch}</b> does not match</p>
    }


return (
    <>
        <form >
            <h3>Add Comment</h3>
            <label htmlFor="UserName" >Username: </label>
            <input type="text" id="UserName" placeholder="Enter your Username..." onChange={handleUser} value={user} /><br />
            <label htmlFor="Comment">Comment: </label>
            <input type="text" id="Comment" placeholder="Add a comment..." onChange={handleComment} value={comment}/>
            <button onClick={CommentPost}>Comment</button>
        </form>
        </>
)
       
}

export default PostComment