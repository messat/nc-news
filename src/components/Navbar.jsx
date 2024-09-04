import { Link } from "react-router-dom"
import Button from '@mui/material/Button';
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { LuUserCircle2 } from "react-icons/lu";
import { getAllTopics } from "../utils/api";




function Navbar (){
  const [topics, setTopics] = useState([])
  useEffect(()=>{
      getAllTopics().then((topicsArr)=>{
        setTopics(topicsArr)
      })
      .catch((err)=>{
        console.log(err)
      })
  }, [])

  const {loggedIn} = useContext(UserContext)
  if(loggedIn.username){
     return (
      <nav className="NavBar container">
        <Link to="/"><button type="button" className="btn heading-text">News</button></Link>        
        {topics.map((topicObj)=>
            <Link to={`/articles/topic/${topicObj.slug}`}><button type="button" className="btn heading-text" key={topicObj.slug}>{topicObj.slug.slice(0,1).toUpperCase() + topicObj.slug.slice(1)}</button></Link>
        )}
        <div className="LogInMessage">
        <p className="LogInName">{loggedIn.name}</p>
        <Link to="/users/logout"><img src={loggedIn.avatar_url} className="AvatarSignInLogo"/></Link>
        </div>
      </nav> 
     )
  }
    else {
      return ( 
       <nav className="NavBar">
        <div className="container">
        <Link to="/"><button type="button" className="btn heading-text">News</button></Link>        
        {topics.map((topicObj)=>
            <Link to={`/articles/topic/${topicObj.slug}`}><button type="button" className="btn heading-text" key={topicObj.slug}>{topicObj.slug.slice(0,1).toUpperCase() + topicObj.slug.slice(1)}</button></Link>
        )}
        <Link to="/users/login"><LuUserCircle2 className="LogInLogo" size={50} color="white" /></Link>
        </div>
      </nav> 
 )
}
}

export default Navbar