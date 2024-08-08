import ArticleCards from "../atoms/MUI-Card/MUI-Card"

function AllNewsArticles ({allArticles}){
  const filterArticles = allArticles.filter((article, index)=>{
    return index > 0
  })

  if(allArticles.length){
return <section className="ArticleCards">
  <div style={{display: "flex", justifyContent: "space-between", gap: "20px", flexWrap: "wrap"}}>
{filterArticles.map((article)=>(
    <li key={article.article_id}>
     <ArticleCards article={article} />
    </li>
))}
</div>
</section>
  }
}

export default AllNewsArticles