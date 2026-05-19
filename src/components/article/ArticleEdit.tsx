import { Link, useParams } from "react-router";
import { articles } from "../../libs/mock";

export default function ArticleEdit() {
  // Path param
  const { id } = useParams();
  const article = articles.find((a) => a.id === Number(id));

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div>
      <Link to={`/articles/${id}`}>← Back to detail</Link>

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
