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

function getAllUsers(){
    return instance.get('/users')
    .then(({data})=>{
        const usersArr = data.users
        return usersArr
    })
}

function singleUser(username){
    return instance.get(`/users/${username}`)
    .then(({data})=>{
        return data.user[0];
    })
}

function postNewComment (article_id, newUser){
    return instance.post(`/articles/${article_id}/comments`, newUser)
}

function deleteComment (comment){
    return instance.delete(`/comments/${comment.comment_id}`)
}
export default getAllArticles

export {getSingleArticle, getAllCommentsByArticleId, patchUpVotesClick, patchDownVotesClick, patchVipVotesClick, getAllUsers, postNewComment, singleUser, deleteComment}