import { Link, useParams } from "react-router";
import { articles } from "../../libs/mock";

export default function ArticleDetail() {
  // Path param
  const { id } = useParams();
  const article = articles.find((a) => a.id === Number(id));

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div>
      <Link to="/articles">← Back to list</Link>

      <article>
        <h2>{article.title}</h2>
        <p className="meta">
          {article.author} · {article.createdAt}
        </p>
        <p>{article.content}</p>
      </article>

      <div className="actions">
        <Link to={`/articles/${id}/edit`}>Edit</Link>
        <button type="button">Delete</button>
      </div>
    </div>
  );
}
