import axios from "axios";

const instance = axios.create({
    baseURL:"https://be-news-api-server.onrender.com/api"
})

function getAllArticles (){
  return instance.get("/articles")
}

function getSingleArticle (article_id){
    return instance.get(`/articles/${article_id}`)
}

function getAllCommentsByArticleId (article_id){
    return instance.get(`/articles/${article_id}/comments`)
}
export default getAllArticles

export {getSingleArticle, getAllCommentsByArticleId}