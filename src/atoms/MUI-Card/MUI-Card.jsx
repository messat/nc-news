import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { getSingleArticle } from '../../utils/api';
import { getAllUsers } from '../../utils/api';
import { Link } from 'react-router-dom';
import { cardStyling } from './MUI-Card.elements';
import Moment from 'react-moment';
import { Rowing } from '@mui/icons-material';



function ArticleCards({article}) {
    const [users, setUsers] = useState([])
    const [singleArticle, setSingleArticle] = useState([])
    useEffect(()=>{
        getAllUsers().then((data)=>{
            setUsers(data)
        })
        .catch((err)=>{
            console.log(err)
        }) 
    }, [])


    function filterUser (article){
        const newUser = users.filter((user)=>(article.author === user.username))
        return <img src={newUser[0].avatar_url} className="Avatar_url"/>

    }
    function articleBody (article_id, article){ 
        useEffect(()=>{
            getSingleArticle(article_id).then((data)=>{
                setSingleArticle(data)
            })
        }, [article_id])
    }
    

  return (
    <Link to={`/articles/${article.article_id}`} style={{textDecoration: "None"}}>
    <Card sx={cardStyling} className='LogInCard'>
      <CardContent>

      <img src={article.article_img_url} className="card-img" alt="..." />

      <div className='CardTitleContainer'>
        <Typography variant="h5" component="div" sx={{textAlign: "center", fontWeight: 600, fontFamily: "playfair display sc", fontSize: "24px", marginTop: "0.5em"}}>
        {article.title}
        </Typography>
      </div>

        <div style={{display: "flex", flexDirection: 'column', marginTop: "20px", marginBottom:"20px"}}>
        <Typography sx={{fontWeight: 500, color: "rgba(122, 118, 118, 0.805)", fontSize: "large", textAlign: "center", alignItems: "flex-end"}} color="text.secondary">
        {article.topic.slice(0,1).toUpperCase() + article.topic.slice(1)} <span className="BorderTopic"></span>
        <Moment format='D MMMM YYYY'>
          {article.created_at}
        </Moment>
        </Typography>
        </div>

        <Typography variant="body2">
          {articleBody(article.article_id, article)}
          {users.length && filterUser(article)}
        <span className="Username">@{article.author}</span>
        </Typography>

      </CardContent>
    </Card>
    </Link>
  );

}

export default ArticleCards