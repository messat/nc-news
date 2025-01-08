import { useContext, useEffect, useState } from "react"
import { getAllUsers } from "../utils/api"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../context/UserContext"
import SignInCard from "../atoms/MUI-Card/MUI-LogInCard"
import LoadingCircularProgress from "./Loading/CircularLoading"
import { Logout } from "@mui/icons-material"
import { LogOutAlert } from "../atoms/MUI-Alert"

function LogIn ({setLogInAlert}){
    const {setLoggedIn}= useContext(UserContext)

    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(null)
    const [open, setOpen] = useState(true)

    const navigate = useNavigate()

    useEffect(()=>{
        setIsLoading(true)
        getAllUsers()
        .then((users)=>{
            setIsLoading(false)
            setUsers(users)
        })
        .catch((err) => {
            setIsLoading(false)
        })
    }, [])


    function handleLogIn (user){
       setLoggedIn(user)
       setLogInAlert(!false)
       localStorage.setItem("user", JSON.stringify(user))
       navigate('/')
    }

if(isLoading) return < LoadingCircularProgress />

   return <section className="container">
            {<LogOutAlert open={open} setOpen={setOpen} />}
            <header>
                <hr className="HorizontalLine"></hr> 
                <h1 className="TopicHeading">Log In</h1> 
                <hr></hr>
            </header>

            <div style={{display: "flex", flexWrap: "wrap",justifyContent: "space-between", gap: "66px", marginTop: "30px"}}>
                {users.map((user)=>(
                <li key={user.username} onClick={()=>{
                    handleLogIn(user)
                }}>
                <SignInCard user={user}/>
                </li>
                ))} 
            </div>
            
   </section>
}

export default LogIn
