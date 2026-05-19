import { Link, useLoaderData } from "react-router";
import type { Article } from "../../libs/types";

export default function ArticleDetail() {
  const article = useLoaderData<Article>();

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
        <Link to={`/articles/${article.id}/edit`}>Edit</Link>
        <button type="button">Delete</button>
      </div>
    </div>
  );
}
