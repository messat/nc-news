import { useContext, useEffect, useState } from "react"
import { getAllUsers } from "../utils/api"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../context/UserContext"
import SignInCard from "../atoms/MUI-Card/MUI-LogInCard"
import LoadingCircularProgress from "./Loading/CircularLoading"

function LogIn (){
    const {setLoggedIn}= useContext(UserContext)

    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(null)

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
       navigate('/')
    }

if(isLoading) return < LoadingCircularProgress />

   return <section className="container">

            <header>
                <hr className="HorizontalLine"></hr> 
                <h1 className="TopicHeading">Log In</h1> 
                <hr></hr>
            </header>

            <div style={{display: "flex", flexWrap: "wrap",justifyContent: "space-between", gap: "70px", marginTop: "30px"}}>
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
