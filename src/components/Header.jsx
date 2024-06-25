import { useContext } from "react"
import { UserContext } from "../context/UserContext"

function Header (){
    const {loggedIn} = useContext(UserContext)
return (
    <section>
    <img className="NCLogo" src="https://img.freepik.com/premium-vector/nc-logo-design_705304-299.jpg"/>
    <h1 className="Title">Welcome to NorthCoders News</h1>
    {loggedIn.username ?<h2>You are are logged in as : {loggedIn.username}</h2>: null}
    </section>
)
}

export default Header