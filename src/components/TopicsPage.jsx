import { Link } from "react-router-dom"
import React from "react"
import Moment from "react-moment"
import { MdReadMore } from "react-icons/md"
import TopicList from "./TopicList"
import LoadingCircularProgress from "./Loading/CircularLoading"
function TopicsPage ({topicArticles}){
const articleByVotes = topicArticles
                            .sort((a, b)=>{
                                    return b.votes -a.votes
                            })
                            .filter((article, index)=>{
                                return index > 0 && index < 6
                            })

return (<main className="row">
        <section className="col-xxl-8 col">
            {topicArticles.length ?
                <li key={topicArticles[0].article_id}>
                    <img className="TopicImg"src={topicArticles[0].article_img_url} alt={"An image of" + topicArticles[0].title}/>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "end", alignItems: "center"}}>
                      <p className="TopicName">{topicArticles[0].topic.slice(0,1).toUpperCase() + topicArticles[0].topic.substring(1)}</p>
                      <Moment format="D MMMM YYYY hh:mm A" style={{color: "grey",fontWeight: 500, fontSize: "large"}} className="TopicDate">
                        {topicArticles[0].created_at}
                      </Moment>
                      </div>
                      <h3 className="TopicTitle">{topicArticles[0].title}</h3>                    
                    {topicArticles[0].body.length < 200 ? <p className="TopicBody"><span className="FirstLetter">{topicArticles[0].body.slice(0,1)}</span>{topicArticles[0].body.slice(1)}</p> : <p className="TopicBody"><span className="FirstLetter">{topicArticles[0].body.slice(0,1)}</span>{topicArticles[0].body.slice(1,180)}...</p> }
                    <p className="TopicAuthor">@{topicArticles[0].author}</p>
                    <p className="TopicVotes">{topicArticles[0].votes} Upvotes</p>
                    <Link to={`/articles/${topicArticles[0].article_id}`}><p className="ReadMoreOnTopic">Read More  <MdReadMore size={40} color="grey"/></p></Link>
                      </li>
            : null}
        <TopicList topicArticles={topicArticles}/>
        </section>
        <aside className="col-xxl-4 col" >
            <h4 className="PopularNewsHeading">Most Popular in {topicArticles.length && topicArticles[0].topic.slice(0, 1).toUpperCase() + topicArticles[0].topic.slice(1)}</h4>
                {articleByVotes.length ? 
                    articleByVotes.map((article)=>(
                        <li key={article.article_id} className="PopularList">
                            <Link to={`/articles/${article.article_id}`} style={{textDecoration: "None", color: "black"}}><h5 className="Titles">{article.title}</h5>
                            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "end"}}>
                            <Moment format="D MMMM YYYY" style={{color: "grey", marginLeft: "-18.1em", fontWeight: 500}}>
                            {article.created_at}
                            </Moment>
                            <img className="ImageOfArticles"src={article.article_img_url}  alt="Article Image" />
                            </div>
                            </Link>
                            <hr/>
                     </li>
                 )) : null }

        </aside>

        </main>

)
}

export default TopicsPage