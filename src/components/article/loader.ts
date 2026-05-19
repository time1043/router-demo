import type { LoaderFunctionArgs } from "react-router";
import { delay } from "../../libs/delay";
import { articles } from "../../libs/mock";

export async function articleListLoader({ request }: LoaderFunctionArgs) {
  await delay();
  const url = new URL(request.url);
  const search = url.searchParams.get("search") || "";
  const page = Number(url.searchParams.get("page")) || 1;
  const pageSize = 2;

  const filtered = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(search.toLowerCase()) ||
      article.author.toLowerCase().includes(search.toLowerCase()),
  );
  const totalPages = Math.ceil(filtered.length / pageSize);
  const paginated = filtered.slice((page - 1) * pageSize, page * pageSize);

  return { articles: paginated, totalPages, page, search };
}

export async function articleDetailLoader({ params }: LoaderFunctionArgs) {
  await delay();
  const article = articles.find((a) => a.id === Number(params.id));
  if (!article) throw new Response("Article not found", { status: 404 });

  return article;
}
