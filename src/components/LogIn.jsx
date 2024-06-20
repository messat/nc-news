import { useContext, useEffect, useState } from "react"
import { getAllUsers } from "../utils/api"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../context/UserContext"

function LogIn (){
    const {setLoggedIn}= useContext(UserContext)
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(null)
    const navigate = useNavigate()
    useEffect(()=>{
        setIsLoading(true)
        getAllUsers().then((users)=>{
            setIsLoading(false)
            setUsers(users)
        })
    }, [])

    function handleLogIn (user){
       setLoggedIn(user)
       navigate('/')
    }
if(isLoading) return <h2>Loading... Please Wait. We Are Fetching Your Profile Data.</h2>
   return <section className="allUsersBlock">
        {users.map((user)=>(
           <li key={user.username} onClick={()=>{
            handleLogIn(user)
           }}>
                <img className="avatar" src={user.avatar_url}/>
                <h3>Name: {user.name}</h3>
                <h4>Username: {user.username}</h4>
            </li>
        ))} 
   </section>

}

export default LogIn
