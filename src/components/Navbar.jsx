import { Link } from "react-router-dom"
import Button from '@mui/material/Button';

function Navbar (){
 return (
    <nav className="NavBar">
        <Link to="/"><Button className="homeButton" variant="contained">Home</Button></Link>
         <Button variant="contained">Search Articles</Button>
        <Button variant="contained">Comments Association</Button>
        <Button variant="contained">Vote Article</Button>
        <Button variant="contained">Post New Comment</Button>
        <Button variant="contained">Remove Comment</Button>
        <Button variant="contained">Topic Of Articles</Button>
        <Button variant="contained">Sort Article Search</Button>
    </nav>
 )
}

export default Navbar