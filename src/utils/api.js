import axios from "axios";

const instance = axios.create({
    baseURL:"https://be-news-api-server.onrender.com/api"
})

function getAllArticles (){
  return instance.get("/articles")
  .then(({data})=>{
    const articlesArr = data.articles.sort((a, b)=>{
        return  a.article_id -b.article_id
     })
     return articlesArr
  })
}

function getSingleArticle (article_id){
    return instance.get(`/articles/${article_id}`)
    .then(({data})=>{
        const article = data.article;
        return article
    })
}

function getAllCommentsByArticleId (article_id){
    return instance.get(`/articles/${article_id}/comments`)
    .then(({data})=>{
        const commentsArr = data.comments
        return commentsArr
    })
}

function patchUpVotesClick(article_id){
    const patchBody = {inc_votes: 1}
    return instance.patch(`/articles/${article_id}`, patchBody)
}

function patchDownVotesClick(article_id){
    const patchBody = {inc_votes: -1}
    return instance.patch(`/articles/${article_id}`, patchBody)
}

function patchVipVotesClick(article_id){
    const patchBody = {inc_votes: 100}
    return instance.patch(`/articles/${article_id}`, patchBody)
}
export default getAllArticles

export {getSingleArticle, getAllCommentsByArticleId, patchUpVotesClick, patchDownVotesClick, patchVipVotesClick}