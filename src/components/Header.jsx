import { useContext } from "react"
import { UserContext } from "../context/UserContext"

function Header (){
    const {loggedIn} = useContext(UserContext)
    
return (
    <section>
        <a href="/"><h1 className="NCLogo">NC</h1></a>
    </section>
)
}

export default Header