import { Link } from "react-router-dom"
import getAllArticles, { getSingleArticle } from "../utils/api"
import { useEffect, useState } from "react"
import { MdReadMore } from "react-icons/md";
import Moment from "react-moment";
import styled from "styled-components";

function ArticleCard ({allArticles}){
      const [latestNews, setLatestNews]= useState('')
      let latestArticle = ''
     if(allArticles.length){
        latestArticle = allArticles[0]
     }
     if(latestArticle.article_id){
      useEffect(()=>{
            getSingleArticle(latestArticle.article_id)
            .then((data)=>{
                 setLatestNews(data)
            })
      },[])
     }
 return <section>
      <img src="fontbolt.png" className="NewsTitle"/>
        {latestNews.article_id ? 
        <div className="LatestArticle">
              <img className="LatestArticleImg" src={latestNews.article_img_url} />
              <p className="LatestTopic">{latestNews.topic.slice(0,1).toUpperCase() + latestNews.topic.slice(1)} </p>
              <Moment format="D MMMM YYYY hh:mm A" className="LatestDate">
                  {latestArticle.created_at}
              </Moment>
              <h3 className="LatestArticleTitle">{latestNews.title}</h3>
              <p className="LatestDescription"><span className="FirstLetter">{latestNews.body.slice(0,1)}</span>{latestNews.body.slice(1)}</p>
              <p className="LatestAuthor">@{latestNews.author}</p>
              <p className="LatestVotes">{latestNews.votes} Upvotes</p>
              <Link to={`/articles/${latestNews.article_id}`}><p className="ReadMore">Read More  <MdReadMore size={40} color="grey"/></p></Link>
        </div>
        : null}
</section>
}

export default ArticleCard


