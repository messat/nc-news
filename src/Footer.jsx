import { AiOutlineLinkedin } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoLogoGithub } from "react-icons/io";




function Footer (){

    return <div className="Footer">
        <p className="Footer-Headline">JOIN THE COMMUNITY</p>
        <div className="SocialLogos">
        <Link to="https://uk.linkedin.com/in/muhammad-essat-a308222a5?trk=people-guest_people_search-card&original_referer=https%3A%2F%2Fwww.linkedin.com%2F"><AiOutlineLinkedin size={50} className="Instagram"/></Link> 
        <Link to="https://www.instagram.com/northcoders/?hl=en"><FaInstagram size={50} className="Instagram" color="purple"/></Link>
        <Link to="https://x.com/i/flow/login?redirect_after_login=%2Fi%2Fflow%2Flogin"><FaXTwitter  size={50} className="Instagram" color="black"/></Link>
        <Link to="https://github.com/messat"><IoLogoGithub size={50} color="black" className="Instagram" /></Link>
        </div>
             </div>

}

export default Footer