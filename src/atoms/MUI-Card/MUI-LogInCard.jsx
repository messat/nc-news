import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



function SignInCard({user}) {
  return (
    <Card sx={{ minWidth: 275, width: 50, height: 350, mb: -2}} className='LogInCard'>
      <CardContent>
        <img src={user.avatar_url} alt="Username Avatar"  className="AvatarLogIn"/>
        <Typography variant="p" sx={{color: "rgba(122, 118, 118, 0.805)", fontWeight: 500, fontSize: "larger", marginLeft: "1em"}}>
          Name 
        </Typography>
        <Typography className="Name" variant="p" sx={{color: "rgba(122, 118, 118, 0.805)", fontSize: "larger", fontWeight: 500, display: 'flex', flexDirection: "row", justifyContent: "end", marginRight: "1em", marginTop: "-1.5em", marginBottom: "1em"}}>
            {user.name}
        </Typography>
        <Typography  variant="p" sx={{color: "rgba(122, 118, 118, 0.805)", fontWeight: 500, fontSize: "larger", marginLeft: "1em"}}>
            User 
        </Typography>
        <Typography className="Username" sx={{ display: "flex", flexDirection: 'row', justifyContent: "end", marginTop: "-1.5em", color: "#f34040", fontWeight: 500, fontSize: "larger", marginRight: "1em"}} variant='p'>
          @{user.username}
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  );
}

export default SignInCard