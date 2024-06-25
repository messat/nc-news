import { Link } from "react-router-dom"
import Button from '@mui/material/Button';
import { useContext } from "react";
import { UserContext } from "../context/UserContext";


function Navbar (){
  const {loggedIn} = useContext(UserContext)
  if(loggedIn.username){
      return  <nav className="NavBar">
        <Link to="/"><Button className="homeButton" variant="contained">Home</Button></Link>        
        <Link to="/articles/topics"><Button variant="contained">Topic Of Articles</Button></Link>
        <Button variant="contained">Sort Article Search</Button>
        <Link to="/users/logOut"><Button variant="contained">Log Out</Button></Link>
    </nav>
    } else {
 return ( 
    <nav className="NavBar">
        <Link to="/"><Button className="homeButton" variant="contained">Home</Button></Link>        
        <Link to="/articles/topics"><Button variant="contained">Topic Of Articles</Button></Link>
        <Button variant="contained">Sort Article Search</Button>
        <Link to="/users/login"><Button variant="contained">Log In</Button></Link>
    </nav> 
 )
}
}

export default Navbar