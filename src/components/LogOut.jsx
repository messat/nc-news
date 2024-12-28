import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import LoadingCircularProgress from "./Loading/CircularLoading";

function LogOut (){
    const {loggedIn,setLoggedIn} = useContext(UserContext)

    const navigateUser = useNavigate()

    function handleLogOut (){
      setLoggedIn({})
      {<LoadingCircularProgress />}
      navigateUser('/users/login')
    }

if(loggedIn.username){
    return <section className="container">

         <header>
        <hr className="HorizontalLine"></hr> 
        <h1 className="TopicHeading">Log Out</h1> 
        <hr></hr>

        <div style={{display: "flex", justifyContent: "center"}}>
          <Card sx={{ minWidth: 275, width: 50, height: 350, mb: -2}} className='LogInCard' onClick={()=>{
          handleLogOut()}}>
            <CardContent>
            <img src={loggedIn.avatar_url} alt="Username Avatar"  className="AvatarLogIn"/>
            <Typography variant="p" sx={{color: "rgba(122, 118, 118, 0.805)", fontWeight: 500, fontSize: "larger", marginLeft: "1em"}}>
              Name 
            </Typography>
            <Typography className="Name" variant="p" sx={{color: "rgba(122, 118, 118, 0.805)", fontSize: "larger", fontWeight: 500, display: 'flex', flexDirection: "row", justifyContent: "end", marginRight: "1em", marginTop: "-1.5em", marginBottom: "1em"}}>
                {loggedIn.name}
            </Typography>
            <Typography  variant="p" sx={{color: "rgba(122, 118, 118, 0.805)", fontWeight: 500, fontSize: "larger", marginLeft: "1em"}}>
                User 
            </Typography>
            <Typography className="Username" sx={{ display: "flex", flexDirection: 'row', justifyContent: "end", marginTop: "-1.5em", color: "#f34040", fontWeight: 500, fontSize: "larger", marginRight: "1em"}} variant='p'>
              @{loggedIn.username}
            </Typography>
            </CardContent>
            <CardActions>
            </CardActions>
          </Card>
    </div>

    </header>
  
    </section>
}
}

export default LogOut