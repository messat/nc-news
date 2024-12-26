import { useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";
import getAllArticles from "../utils/api";
import Typography from '@mui/material/Typography';
import  MyArticleCard  from "./MyArticlesCard.jsx"

export function ViewMyArticles (){
    const {loggedIn} = useContext(UserContext)
    const [usersArticles, setUsersArticles] = useState([])

    useEffect(()=>{
        getAllArticles()
        .then((data) =>{
            setUsersArticles(data)
        })
    }, [usersArticles])
        
    const filterByUsername = usersArticles.filter( article => article.author === loggedIn.username)
if(filterByUsername.length){
    return <div>
            <Typography variant="h3" gutterBottom style={{display: "flex", justifyContent: "center", marginTop: "30px", marginBottom: "30px"}}>
                My Articles
            </Typography>

        <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "20px", marginLeft: "20px", justifyContent: "center"}}>
            {filterByUsername.map((article) => (
                <li key={article.article_id}>
                <MyArticleCard article={article} setUsersArticles={setUsersArticles}/>
                </li>
            ))}
        </div>

        </div>
    
}

}