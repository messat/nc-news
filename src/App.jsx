import Header from "./components/Header"
import Navbar from "./components/Navbar"
import ArticlesList from "./components/ArticlesList";
import IdCard from "./components/IdCard";
import { Routes, Route } from 'react-router-dom';
import ErrorPage from "./components/Error";
import { UserContext} from "./context/UserContext";
import LogIn from "./components/LogIn";
import LogOut from "./components/LogOut";
import { useState } from "react";
import Footer from "./Footer";
import TopicArticlesHeader from "./components/TopicArticlesHeader";

function App() {
  const [loggedIn, setLoggedIn]= useState({})
  return (<div className="">
   <UserContext.Provider value={{loggedIn, setLoggedIn}}>
    <div className="HeadingBar">
   <Header/>
   <Navbar />
   </div>
    <Routes>
     <Route path="*" element={<ErrorPage/>} />
     <Route path ='/' element={<ArticlesList/>}></Route>
     <Route path ='/articles/:article_id' element={<IdCard/>}></Route>
     <Route path ='/articles/topic/:topic' element={<TopicArticlesHeader/>}></Route>
     <Route path ='/users/login' element={<LogIn/>}></Route>
     <Route path ='/users/logout' element={<LogOut/>}></Route>
     </Routes>
     <Footer />
     </UserContext.Provider>

     </div>)
}

export default App
