import axios from "axios";

const instance = axios.create({
    baseURL:"https://be-news-api-server.onrender.com/api"
})

async function getAllArticles (topic){
    if(topic){
        const {data} = await instance.get(`/articles?topic=${topic}`)
        const topicsArticleArr = data.articles
        return topicsArticleArr
    } else {
        const {data} = await instance.get("/articles")
          const articlesArr = data.articles
           return articlesArr
    }
}

function getAllTopics (){
    return instance.get(`/topics`)
            .then(({data})=>{
                return data.topics
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

function patchUpVoteComment (comment_id){
    const patchVote = {inc_votes: 1}
    return instance.patch(`/comments/${comment_id}`, patchVote)
}

function patchDownVoteComment (comment_id){
    const patchVote = {inc_votes: -1}
    return instance.patch(`/comments/${comment_id}`, patchVote)
}
export default getAllArticles

export {getAllTopics, getSingleArticle, getAllCommentsByArticleId, patchUpVotesClick, patchDownVotesClick, patchVipVotesClick, getAllUsers, postNewComment, singleUser, deleteComment,patchUpVoteComment, patchDownVoteComment }