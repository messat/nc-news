import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { getSingleArticle } from '../../utils/api';
import { getAllUsers } from '../../utils/api';
import { Link } from 'react-router-dom';
import { cardStyling } from './MUI-Card.elements';
import Moment from 'react-moment';
import ThumbsUpDownIcon from '@mui/icons-material/ThumbsUpDown';

function ArticleCards({article}) {
    const [users, setUsers] = useState([])

    useEffect(()=>{
        getAllUsers().then((data)=>{
            setUsers(data)
        })
        .catch((err)=>{
            console.log(err)
        }) 
    }, [])

    function filterUser (article){
        const newUser = users.filter( user =>(article.author === user.username))
        return <img src={newUser[0].avatar_url} className="Avatar_url"/>
    }

  return (
    <Link to={`/articles/${article.article_id}`} style={{textDecoration: "None"}}>
    <Card sx={cardStyling} className='LogInCard'>
      <CardContent>

      <img src={article.article_img_url} className="card-img" alt='Article Image' />

      <div className='CardTitleContainer'>
        <Typography variant="h5" component="div" sx={{textAlign: "center", fontWeight: 600, fontFamily: "playfair display sc", fontSize: "24px", marginTop: "0.5em"}}>
        {article.title}
        </Typography>
      </div>
      <div >
        <ThumbsUpDownIcon color="action" sx={{ fontSize: 40, ml: 14 }}>
        </ThumbsUpDownIcon>
        <Typography sx={{ml: 22, mt: -4, fontSize: "20px", fontWeight: "bold"}}>
          {article.votes}
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
          {users.length && filterUser(article)}
        <span className="Username">@{article.author}</span>
        </Typography>

      </CardContent>
    </Card>
    </Link>
  );

}

export default ArticleCards