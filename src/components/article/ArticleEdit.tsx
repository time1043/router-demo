import { Link, useLoaderData } from "react-router";
import type { Article } from "../../libs/types";

export default function ArticleEdit() {
  const article = useLoaderData<Article>();

  return (
    <div>
      <Link to={`/articles/${article.id}`}>← Back to detail</Link>

      <h2>Edit Article</h2>

      <form className="edit-form">
        <div>
          <label htmlFor="title">Title</label>
          <input id="title" type="text" defaultValue={article.title} />
        </div>
        <div>
          <label htmlFor="content">Content</label>
          <textarea id="content" rows={6} defaultValue={article.content} />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
