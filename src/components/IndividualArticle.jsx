import { Link } from "react-router-dom"
import Comments from "./Comments"
import Votes from "./eventListener/Votes"

function IndividualArticle ({singleArticle, setSingleArticle, article_id}){
    return <section>
    <li className="SingleArticleId" key={singleArticle.article_id}>
   <h3>{singleArticle.title}</h3>
   <h4>By {singleArticle.author}</h4>
   <Link to="/"><img className="ImagebyArticleId" src={singleArticle.article_img_url} /></Link>
   <div className="descriptionBody">
   <p><b>Description: </b>{singleArticle.body}</p>
   <p><b>Subject: </b>{singleArticle.topic}</p>
   <p><b>Comments Count:</b> {singleArticle.comment_count}</p>
   <p><b>Year Published: </b>{singleArticle.created_at ? singleArticle.created_at.slice(0,4): null}</p>
   <p><b>Votes On Article: </b>{singleArticle.votes}</p> 
   
  <Votes article_id={article_id} setSingleArticle={setSingleArticle} />
   <p><b>Article ID: </b>{singleArticle.article_id}</p>
   </div>
 </li> 
   <Comments article_id={article_id} singleArticle={singleArticle} setSingleArticle={setSingleArticle}/>
   </section>
}

export default IndividualArticle

