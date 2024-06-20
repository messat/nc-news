import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
function LogOut (){
    const {setLoggedIn} = useContext(UserContext)
    const navigateUser = useNavigate()
    function handleLogOut (){
     setLoggedIn({})
     navigateUser('/users/login')
    }
    
    return <section>
    <h1>Sign Out</h1>
    <button onClick={()=>{
        handleLogOut()}}>Log Out</button>
    </section>
}

export default LogOut