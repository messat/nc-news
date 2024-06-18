import Header from "./components/Header"
import Navbar from "./components/Navbar"
import ArticlesList from "./components/ArticlesList";
import ArticleIdCard from "./components/ArticleIdCard";
import { Routes, Route } from 'react-router-dom';
import ErrorPage from "./components/Error";


function App() {
  return (
    <>
   <Header/>
   <Navbar />
    <Routes>
     <Route path="*" element={<ErrorPage/>} />
     <Route path ='/' element={<ArticlesList/>}></Route>
     <Route path ='/articles/:article_id' element={<ArticleIdCard/>}></Route>
     </Routes>
    </>
  )
}

export default App
