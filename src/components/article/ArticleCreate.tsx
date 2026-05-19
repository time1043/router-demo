import { Form, Link, useActionData } from "react-router";
import type { ActionErrors } from "../../libs/types";

export default function ArticleCreate() {
  const actionData = useActionData<ActionErrors>();

  return (
    <div>
      <Link to="/articles">← Back to list</Link>

      <h2>Create New Article</h2>

      <Form method="post" className="edit-form">
        <div>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            placeholder="Enter title"
          />
          {actionData?.errors?.title && (
            <p className="field-error">{actionData.errors.title}</p>
          )}
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <input
            id="author"
            name="author"
            type="text"
            placeholder="Enter author"
          />
          {actionData?.errors?.author && (
            <p className="field-error">{actionData.errors.author}</p>
          )}
        </div>
        <div>
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            name="content"
            rows={6}
            placeholder="Enter content"
          />
          {actionData?.errors?.content && (
            <p className="field-error">{actionData.errors.content}</p>
          )}
        </div>
        <button type="submit">Create</button>
      </Form>
    </div>
  );
}
