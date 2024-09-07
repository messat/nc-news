import * as React from 'react';
import { Link } from "react-router-dom"
import { getSingleArticle } from "../utils/api"
import { useEffect, useState } from "react"
import { MdReadMore } from "react-icons/md";
import Moment from "react-moment";
import ButtonGroup from '@mui/joy/ButtonGroup';
import Button from '@mui/joy/Button';


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
       <h1 className="container Title">Northcoders News</h1>
        {latestNews.article_id ? 
        <div className="LatestArticle container">
              <img className="LatestArticleImg" src={latestNews.article_img_url} />
              <ButtonGroup aria-label="radius button group" color="danger"  variant='solid'  sx={{ '--ButtonGroup-radius': '40px'}}>
                  <Button >   {latestNews.topic.slice(0,1).toUpperCase() + latestNews.topic.slice(1)}   </Button>
                  </ButtonGroup>
              <Moment format="ddd D MMMM YYYY hh:mm A" className="LatestDate">
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


