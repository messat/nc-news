import axios from "axios";

const instance = axios.create({
    baseURL:"https://be-news-api-server.onrender.com/api"
})

function getAllArticles (topic, sort_by){
    if(topic){
        return instance.get(`/articles?topic=${topic}`)
            .then(({data}) =>{
                const{articles: topicsArticleArr } = data
                return topicsArticleArr
            })
    } 
    else {
        return instance.get("/articles")
            .then(({data}) => {
                const {articles: articlesArr} = data
                 return articlesArr
            })
    }
}

function filterArticlesBySort(sort_by, order_by) {
    let apiArticle = `/articles?`
    if (sort_by){
        apiArticle += `sort_by=${sort_by}&`
    }
    if (order_by) {
        apiArticle += `order=${order_by}&`
    }
    if(!sort_by && !order_by) {
       return instance.get(`/articles`)
           .then(({data}) => {
               const {articles: allArticles } = data
               return allArticles
           })
   } else {
       return instance.get(apiArticle)
               .then(({data}) => {
                   const sortByArticlesArr = data.articles
                   return sortByArticlesArr
               })
   }
}

function paginateArticles(pageNumber, limitNumber){
    return instance.get(`/articles?limit=${limitNumber}&p=${pageNumber}`)
        .then(({data}) => {
            const {articles: pagination} = data
            return pagination
        })
}

function deleteArticle(article_id) {
    return instance.delete(`/articles/${article_id}`)
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

function postNewArticle(article){
    const newArticle = { 
        author: article.author,
        title: article.title,
        body: article.body, 
        topic: article.topic.slug,
        article_img_url: article.imageUrl
    }
    return instance.post("/articles", newArticle)
}

function getAllCommentsByArticleId (article_id, pageNumber, limit){
    return instance.get(`/articles/${article_id}/comments?p=${pageNumber}&limit=${limit}`)
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

export { filterArticlesBySort, paginateArticles, deleteArticle, getAllTopics, getSingleArticle, getAllCommentsByArticleId, postNewArticle, patchUpVotesClick, patchDownVotesClick, patchVipVotesClick, getAllUsers, postNewComment, singleUser, deleteComment,patchUpVoteComment, patchDownVoteComment }