import { Link } from "react-router-dom"
function ArticleCard ({allArticles}){
 return <section>
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
)):null}
</section>
}

export default ArticleCard