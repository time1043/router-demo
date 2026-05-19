import type { LoaderFunctionArgs } from "react-router";
import { delay } from "../../libs/delay";
import { articles } from "../../libs/mock";

export async function articleListLoader() {
  await delay();
  return articles;
}

export async function articleDetailLoader({ params }: LoaderFunctionArgs) {
  await delay();
  const article = articles.find((a) => a.id === Number(params.id));
  if (!article) throw new Response("Article not found", { status: 404 });

  return article;
}
