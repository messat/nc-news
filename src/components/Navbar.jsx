import { Link } from "react-router-dom"
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { LuUserCircle2 } from "react-icons/lu";
import { getAllTopics } from "../utils/api";

function Navbar (){
  const {loggedIn} = useContext(UserContext)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [topics, setTopics] = useState([])
  useEffect(() => {
    getAllTopics()
      .then((topicsArr) => {
        setTopics(topicsArr);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

      return (<nav className="NavBar">

        <div className="NavHeader">
        <button className="Hamburger" type="button" onClick={() => {
            setIsMenuOpen((prev) => !prev)
          }}> ☰ </button>
        <Link to="/"><button type="button" className="btn heading-text">News</button></Link>
        </div>   

        <ul className={`NavLinks ${isMenuOpen ? "Open" : ""}`}>     
        {topics.map((topicObj)=>
        <li key={topicObj.slug}>
            <Link to={`/articles/topic/${topicObj.slug}`}><button type="button" className="btn heading-text" key={topicObj.slug}>{topicObj.slug.slice(0,1).toUpperCase() + topicObj.slug.slice(1)}</button></Link>
            </li>
        )}

        {loggedIn.username ? 
        <Link to="/users/logout"><img src={loggedIn.avatar_url} className="LogInLogo AvatarSignInLogo"/></Link>
        : 
        <Link to="/users/login"><LuUserCircle2 className="LogInLogo" size={50} /></Link>}
      </ul>

      </nav> 
 )

}

export default Navbar