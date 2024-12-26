import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { Link } from 'react-router-dom';
import Moment from "react-moment";
import getAllArticles, { deleteArticle } from '../utils/api';



export default function MyArticleCard({article, setUsersArticles}) {

  return (
    <Card sx={{ minHeight: 400, minWidth: 250, maxWidth: 290, maxHeight: 400  }} className='LogInCard'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image={article.article_img_url}
          alt="Article Image"
        />
        <CardContent sx={{padding: "0px", height: "186px"}}>
          <Typography gutterBottom variant="h5" component="div" textAlign={'center'} margin={"10px"} height={"125px"}>
            {article.title}
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }} textAlign={"center"} fontSize={"16px"} margin={"5px"}>
            {article.topic.slice(0,1).toUpperCase() + article.topic.slice(1)}
          </Typography>
          <div style={{textAlign: "center"}}>
          <Moment format=" D MMMM YYYY" style={{marginTop: 2, color: "grey"}}>
                 {article.created_at}
              </Moment>
              </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/articles/${article.article_id}`}><Button size="medium" color="primary">
          View Article
        </Button></Link>
        <Button size='medium' sx={{color: "red"}} onClick={()=>{
            deleteArticle(article.article_id)
            getAllArticles()
            .then((data) => {
                setUsersArticles(data)
            })
        }}>
            Delete Article
        </Button>
      </CardActions>
    </Card>
  );
}
