import { redirect, type ActionFunctionArgs } from "react-router";
import { delay } from "../../libs/delay";
import { addArticle, updateArticle } from "../../libs/mock";
import type { ActionErrors } from "../../libs/types";

export async function articleCreateAction({
  request,
}: ActionFunctionArgs): Promise<ActionErrors | Response> {
  await delay();
  const formData = await request.formData();
  const title = formData.get("title") as string;
  const author = formData.get("author") as string;
  const content = formData.get("content") as string;

  const errors: Record<string, string> = {};
  if (!title?.trim()) errors.title = "Title is required";
  if (!author?.trim()) errors.author = "Author is required";
  if (!content?.trim()) errors.content = "Content is required";

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  const article = await addArticle({ title, author, content });
  return redirect(`/articles/${article.id}`);
}

export async function articleEditAction({
  params,
  request,
}: ActionFunctionArgs): Promise<ActionErrors | Response> {
  await delay();
  const formData = await request.formData();
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;

  const errors: Record<string, string> = {};
  if (!title?.trim()) errors.title = "Title is required";
  if (!content?.trim()) errors.content = "Content is required";

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  await updateArticle(Number(params.id), { title, content });
  return redirect(`/articles/${params.id}`);
}
