import * as React from 'react';
import { useContext, useState } from "react";
import { postNewComment } from "../../utils/api";
import { UserContext } from "../../context/UserContext";
import MultilineTextFields from "../../atoms/MUI-TextField";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import {ErrorAlert, SuccessAlert} from '../../atoms/MUI-Alert';


function PostComment ({article_id, setCommentsById}){
    const {loggedIn} = useContext(UserContext)
    const [comment, setComment]=useState('')
    const [err, setErr]=useState(false)
    const [loadingComment, setLoadingComment] = useState(null)
    const navigate = useNavigate()
    const [showAlert, setShowAlert] = useState(false)
    const [showSuccessAlert, setShowSuccessAlert] = useState(false)

    
    function handleSubmit (event){
        event.preventDefault()
        const newUser = {username: loggedIn.username, body: comment}
        setErr(false)
        if(loggedIn.username){
            setShowSuccessAlert(true)
            setShowAlert(false)
            setLoadingComment(true)
            postNewComment(article_id, newUser)
            .then((data)=>{
                setLoadingComment(false)
                setCommentsById((currentCommentsArr)=>{
                setComment('')
            return [data.data.comment, ...currentCommentsArr]
        })
    })
    .catch(()=>{
       setErr(true)
    })
    }  else {
        setShowSuccessAlert(false)
        setShowAlert(true)
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

    function navigateSignIn (){
        navigate('/users/login')
    }

    function removeText (){
        setComment('')
    }
if(loadingComment) {
    setLoadingComment(false)
    return <h2>Loading... Please wait while your comment is being posted</h2>}

return (<section>
        <form onSubmit={handleSubmit} style={{marginBottom: "-70px"}}>
             <span>{!loggedIn.username ? <img src="https://cdn-icons-png.flaticon.com/512/152/152532.png" className="SignInButton" onClick={navigateSignIn}/> : 
             <img src={loggedIn.avatar_url} className="SignInButton" onClick={navigateSignIn}/>}
            <MultilineTextFields setComment={setComment} comment={comment}/></span>
            <Button sx={{backgroundColor: "primary", marginLeft: "46em"}} onClick={removeText}>Cancel</Button>        
            <Button type="submit" sx={{backgroundColor: "grey", color: "white", marginLeft: "53em", marginTop: "-4.4em"}}>Comment</Button>
            {showAlert ? <ErrorAlert /> : null}
            {showSuccessAlert ? <SuccessAlert/> : null}
            </form>
        </section>  
)
}

export default PostComment