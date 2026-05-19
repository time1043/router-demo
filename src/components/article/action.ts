import { redirect, type ActionFunctionArgs } from "react-router";
import { delay } from "../../libs/delay";
import { addArticle, updateArticle } from "../../libs/mock";

export async function articleCreateAction({ request }: ActionFunctionArgs) {
  await delay();
  const formData = await request.formData();
  const title = formData.get("title") as string;
  const author = formData.get("author") as string;
  const content = formData.get("content") as string;
  const article = await addArticle({ title, author, content });
  return redirect(`/articles/${article.id}`);
}

export async function articleEditAction({
  params,
  request,
}: ActionFunctionArgs) {
  await delay();
  const formData = await request.formData();
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  await updateArticle(Number(params.id), { title, content });
  return redirect(`/articles/${params.id}`);
}
