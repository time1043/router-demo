import { Link } from "react-router";

export default function ArticleCreate() {
  return (
    <div>
      <Link to="/articles">← Back to list</Link>

      <h2>Create New Article</h2>

      <form className="edit-form">
        <div>
          <label htmlFor="title">Title</label>
          <input id="title" type="text" placeholder="Enter title" />
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <input id="author" type="text" placeholder="Enter author" />
        </div>
        <div>
          <label htmlFor="content">Content</label>
          <textarea id="content" rows={6} placeholder="Enter content" />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
