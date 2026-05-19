import { Form, Link, useActionData, useLoaderData } from "react-router";
import type { ActionErrors, Article } from "../../libs/types";

export default function ArticleEdit() {
  const article = useLoaderData<Article>();
  const actionData = useActionData<ActionErrors>();

  return (
    <div>
      <Link to={`/articles/${article.id}`}>← Back to detail</Link>

      <h2>Edit Article</h2>

      <Form method="post" className="edit-form">
        <div>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            defaultValue={article.title}
          />
          {actionData?.errors?.title && (
            <p className="field-error">{actionData.errors.title}</p>
          )}
        </div>
        <div>
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            name="content"
            rows={6}
            defaultValue={article.content}
          />
          {actionData?.errors?.content && (
            <p className="field-error">{actionData.errors.content}</p>
          )}
        </div>
        <button type="submit">Save</button>
      </Form>
    </div>
  );
}
