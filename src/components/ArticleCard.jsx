import { Link } from "react-router-dom"
function ArticleCard ({allArticles, singleArticle}){
      if(typeof singleArticle === 'object'){
         return <li className="SingleArticleId" key={singleArticle.article_id}>
        <h3>{singleArticle.title}</h3>
        <h4>By {singleArticle.author}</h4>
        <Link to="/"><img className="ImagebyArticleId" src={singleArticle.article_img_url} /></Link>
        <div className="descriptionBody">
        <p><b>Description: </b>{singleArticle.body}</p>
        <p><b>Subject: </b>{singleArticle.topic}</p>
        <p><b>Comments Count:</b> {singleArticle.comment_count}</p>
        <p><b>Year Published: </b>{singleArticle.created_at ? singleArticle.created_at.slice(0,4): null}</p>
        <p><b>Votes On Article: </b>{singleArticle.votes}</p>
        <p><b>Article ID: </b>{singleArticle.article_id}</p>
        </div>
      </li> 
      }
      else {
 return <>
       {allArticles.length ? allArticles.map((article)=>(
        <li key={article.article_id} className="Article">
        <h3 className="ArticleTitle">{article.title}</h3>
        <h4 className="ArticleAuthor">By {article.author}</h4>
        <p>Subject: {article.topic}</p>
        <Link to={`/articles/${article.article_id}`}><img className="ArticleImg" src={article.article_img_url} /></Link>
        <p>Year Published: {article.created_at.slice(0, 4)}</p>
        <p>Comments Count: {article.comment_count}</p>
        <p>Votes On Article: {article.votes}</p>
        </li>
)):<p></p>}
</>
      }
}

export default ArticleCard