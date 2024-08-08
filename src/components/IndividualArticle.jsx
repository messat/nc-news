import { Link } from "react-router-dom"
import Comments from "./Comments"
import Votes from "./eventListener/Votes"
import { useEffect, useState } from "react"
import getAllArticles, { getAllUsers } from "../utils/api"
import { FaRegCommentAlt } from "react-icons/fa";
import Moment from "react-moment"


function IndividualArticle ({singleArticle, setSingleArticle, article_id}){
  const [allUsers, setAllUsers] = useState([])
  const [allArticles, setAllArticles] = useState([])
  useEffect(()=>{
    getAllUsers().then((data)=>{
      setAllUsers(data)
    })

  }, [singleArticle.article_id])

  useEffect(()=>{
    getAllArticles().then((data)=>{
      setAllArticles(data)
    })
  },[])

function getUser (author){
  const filterUser = allUsers.filter((user)=>{
    return user.username === author
  })
  if(filterUser.length){
   return <div>
    <img className="AvatarID" src={filterUser[0].avatar_url} alt="Avatar logo" />
   </div>
  }
}

  if(singleArticle.article_id){
    return <main className="row RemoveContainer">
    <div className="col-8">
  
    <li className="ArticleByID" key={singleArticle.article_id}>
      <p className="TopicByID">{singleArticle.topic.slice(0,1).toUpperCase() + singleArticle.topic.substring(1)}</p>
      <Moment format="D MMMM YYYY hh:mm A" className="DateByID">
        {singleArticle.created_at}
      </Moment>
      <h2 className="TitleByID">{singleArticle.title}</h2>
      {getUser(singleArticle.author)}
      <p className="AuthorByID">@{singleArticle.author}</p>
      <img className="ArticleImgID"src={singleArticle.article_img_url} alt="Article Image" />
      <p className="DescriptionByID"><span className="FirstLetterOfBody">{singleArticle.body.slice(0,1)}</span>{singleArticle.body.slice(1)}</p>
      
  
  <Votes article_id={article_id} setSingleArticle={setSingleArticle} singleArticle={singleArticle}/>
  <div className="CommentSection">
   <p className="CommentCount">{singleArticle.comment_count}</p>
   <FaRegCommentAlt className="CommentIcon" size={40}/>
   </div>

 </li> 
   <Comments article_id={article_id} singleArticle={singleArticle} setSingleArticle={setSingleArticle}/>
   </div>
   <aside className="col-4">
    <h4 className="MoreNews">More News</h4>
    <div className="Aside">
    {allArticles.length ? 
    allArticles.map((article)=>(
      <li key={article.article_id}>
        <Link to={`/articles/${article.article_id}`} style={{textDecoration: "None", color: "black"}}><h5 className="Titles">{article.title}</h5>
        <div style={{display: "flex", flexDirection: "row",justifyContent: "space-between", alignItems: "end"}}>
        <Moment format="D MMMM YYYY" style={{marginLeft: "-17.2em", marginBottom: "-0.5em", fontWeight: 500, color: "grey", fontStyle: "italic"}}>
          {article.created_at}
        </Moment>
        <img className="ImageOfArticles"src={article.article_img_url}  alt="Article Image" />
        </div>
        </Link>
        <hr/>
      </li>
    )) : null }
    </div> 
   </aside>
   </main>
  }
}

export default IndividualArticle

