import ArticleCards from "../atoms/MUI-Card/MUI-Card"
function TopicList ({topicArticles}){
    console.log(topicArticles)
    const allTopics = topicArticles.filter((article, index)=>{
        return index > 0
    })
    if(allTopics.length){
        return <section className="ArticleCards TopicCards">
          <div style={{display: "flex", justifyContent: "space-between", gap: "20px", flexWrap: "wrap"}}>
        {allTopics.map((article, index)=>(
            <li key={article.article_id}>
             <ArticleCards article={article} />
            </li>
        ))}
        </div>
        </section>
          }


}

export default TopicList