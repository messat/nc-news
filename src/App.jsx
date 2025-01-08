import Header from "./components/Header"
import Navbar from "./components/Navbar"
import ArticlesList from "./components/ArticlesList";
import IdCard from "./components/IdCard";
import { Routes, Route } from 'react-router-dom';
import ErrorPage from "./components/Error";
import { UserContext} from "./context/UserContext";
import LogIn from "./components/LogIn";
import LogOut from "./components/LogOut";
import { WriteArticle } from "./components/PostArticle";
import { useState } from "react";
import Footer from "./Footer";
import TopicArticlesHeader from "./components/TopicArticlesHeader";
import { ViewMyArticles } from "./components/MyArticles";
import { useEffect } from "react";

function App() {
  const [loggedIn, setLoggedIn]= useState({})
  const [isNewArticle, setIsNewArticle] = useState(false)
  const [postArticleAlert, setPostArticleAlert] = useState(false)
  const [logInAlert, setLogInAlert] = useState(false)
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user")
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setLoggedIn(foundUser)
    }
  }, [])

  return (<div>
   <UserContext.Provider value={{loggedIn, setLoggedIn}}>

    <div className="HeadingBar container-fluid">
   <Header/>
   <Navbar />
   </div>

    <Routes>
     <Route path="*" element={<ErrorPage/>} />
     <Route path ='/' element={<ArticlesList isNewArticle={isNewArticle} setIsNewArticle={setIsNewArticle} postArticleAlert={postArticleAlert} logInAlert={logInAlert} setLogInAlert={setLogInAlert}/>}></Route>
     <Route path='/writearticle' element={<WriteArticle isNewArticle={isNewArticle} setIsNewArticle={setIsNewArticle} setPostArticleAlert={setPostArticleAlert}/>}></Route>
     <Route path ='/articles/:article_id' element={<IdCard/>}></Route>
     <Route path ='/articles/topic/:topic' element={<TopicArticlesHeader/>}></Route>
     <Route path='/myaccount/viewmyarticles' element={<ViewMyArticles />}></Route>
     <Route path ='/users/login' element={<LogIn setLogInAlert={setLogInAlert}/>}></Route>
     <Route path ='/users/logout' element={<LogOut/>}></Route>
     </Routes>

     <Footer />

     </UserContext.Provider>

     </div>)
}

export default App
