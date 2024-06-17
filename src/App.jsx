import Header from "./components/Header"
import Navbar from "./components/Navbar"
import ArticlesList from "./components/ArticlesList";

import { Routes, Route } from 'react-router-dom';
import ErrorPage from "./components/Error";


function App() {
  return (
    <>
   <Header/>
   <Navbar />
   <ArticlesList/>
    <Routes>
     <Route path="*" element={<ErrorPage/>} />
     <Route path ='/' element={<Navbar/>}></Route>
     </Routes>

    </>
  )
}

export default App
