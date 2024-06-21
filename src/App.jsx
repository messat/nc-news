import Header from "./components/Header"
import Navbar from "./components/Navbar"
import ArticlesList from "./components/ArticlesList";
import IdCard from "./components/IdCard";
import { Routes, Route } from 'react-router-dom';
import ErrorPage from "./components/Error";
import { UserContext } from "./context/UserContext";
import LogIn from "./components/LogIn";
import LogOut from "./components/LogOut";
import { useState } from "react";
import Topics from "./components/Topics";
import Subject from "./components/Subject";

function App() {
  const [loggedIn, setLoggedIn]= useState({})
  return ( 
   <UserContext.Provider value={{loggedIn, setLoggedIn}}>
   <Header/>
   <Navbar />
    <Routes>
     <Route path="*" element={<ErrorPage/>} />
     <Route path ='/' element={<ArticlesList/>}></Route>
     <Route path ='/articles/:article_id' element={<IdCard/>}></Route>
     <Route path ='/users/login' element={<LogIn/>}></Route>
     <Route path ='/users/logOut' element={<LogOut/>}></Route>
     <Route path='/articles/topics' element={<Topics />}></Route>
     <Route path='/articles/topics/:topic' element={<Subject />}></Route>
     </Routes>
    </UserContext.Provider>
    
  )
}

export default App
