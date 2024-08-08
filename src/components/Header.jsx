import { useContext } from "react"
import { UserContext } from "../context/UserContext"

function Header (){
    const {loggedIn} = useContext(UserContext)
return (
    <section className="container">
    <img className="NCLogo" src="/logo1.png" alt="NC Logo"/>
    </section>
)
}

export default Header