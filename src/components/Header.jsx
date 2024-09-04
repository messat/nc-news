import { useContext } from "react"
import { UserContext } from "../context/UserContext"

function Header (){
    const {loggedIn} = useContext(UserContext)
return (
    <section>
        <h1 className="NCLogo">NC</h1>
    </section>
)
}

export default Header