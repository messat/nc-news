import { Link } from "react-router-dom"
import { getSingleArticle } from "../utils/api"
import { useEffect, useState } from "react"
import { MdReadMore } from "react-icons/md";
import Moment from "react-moment";
import ButtonGroup from '@mui/joy/ButtonGroup';
import Button from '@mui/joy/Button';
import { ArticleAlert } from "./Alerts/AlertArticlePost";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { LoggedInAlert } from "../atoms/MUI-Alert";


function ArticleCard ({allArticles, postArticleAlert, logInAlert, setLogInAlert}){
      const {loggedIn} = useContext(UserContext)
      const [latestNews, setLatestNews]= useState('')
      const [open, setOpen] = useState(true)
   
      useEffect(()=>{
            if(allArticles.length) {
            getSingleArticle(allArticles[0].article_id)
            .then((data)=>{
                 setLatestNews(data)
            })
            .catch((err)=>{
                  console.log(err)
            })
            }
      },[])

 return <section className='LatestArticleInfo'>
       <h1 className="container Title">North Community News</h1>
        {latestNews.article_id ? 
        <div className="LatestArticle container">
              {postArticleAlert && <ArticleAlert />}
              {loggedIn.username && logInAlert && <LoggedInAlert setLogInAlert={setLogInAlert} open={open} setOpen={setOpen}/> }
              <img className="LatestArticleImg" src={latestNews.article_img_url} />
              <div className='LatestDateAndTime'>
              <ButtonGroup aria-label="radius button group" color="danger"  variant='solid'  sx={{ '--ButtonGroup-radius': '40px'}}>
                  <Link to={`/articles/topic/${latestNews.topic}`}><Button className='LatestTopic' sx={{fontSize: "15px"}}>   {latestNews.topic.slice(0,1).toUpperCase() + latestNews.topic.slice(1)}   </Button></Link>
                  </ButtonGroup>
              <Moment format="ddd D MMMM YYYY hh:mm A" className="LatestDate">
                 {latestNews.created_at}
              </Moment>
              </div>
              <h3 className="LatestArticleTitle">{latestNews.title}</h3>
              <p className="LatestDescription"><span className="FirstLetter">{latestNews.body.slice(0,1)}</span>{latestNews.body.slice(1, 250)} {latestNews.body.length > 250 ? " ...": null}</p>
              <div className='LatestAuthorAndVotes'>
              <p className="LatestAuthor">@{latestNews.author}</p>
              <p className="LatestVotes">{latestNews.votes} Upvotes</p>
              </div>
              <Link to={`/articles/${latestNews.article_id}`}><p className="ReadMore">Read More  <MdReadMore size={40} color="grey"/></p></Link>
        </div>
        : null}
        
</section>
}

export default ArticleCard


