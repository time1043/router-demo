import type { Article } from "./types";

export const articles: Article[] = [
  {
    id: 1,
    title: "Getting Started with React Router",
    content:
      "React Router is a powerful routing library for React applications...",
    author: "Alice",
    createdAt: "2024-01-15",
  },
  {
    id: 2,
    title: "Understanding Path Parameters",
    content:
      "Path parameters allow you to capture dynamic segments from the URL...",
    author: "Bob",
    createdAt: "2024-01-16",
  },
  {
    id: 3,
    title: "Query Parameters Explained",
    content:
      "Query parameters are useful for filtering, sorting, and pagination...",
    author: "Charlie",
    createdAt: "2024-01-17",
  },
  {
    id: 4,
    title: "Nested Routes in React Router",
    content:
      "Nested routes allow you to create complex layouts with shared UI...",
    author: "Alice",
    createdAt: "2024-01-18",
  },
  {
    id: 5,
    title: "Navigation in React Router",
    content:
      "Learn how to navigate between pages using Link and useNavigate...",
    author: "Bob",
    createdAt: "2024-01-19",
  },
  {
    id: 6,
    title: "Route Guards and Protection",
    content: "Protect your routes with authentication and authorization...",
    author: "Charlie",
    createdAt: "2024-01-20",
  },
];

export async function addArticle(
  data: Omit<Article, "id" | "createdAt">,
): Promise<Article> {
  const article: Article = {
    ...data,
    id: Math.max(...articles.map((a) => a.id)) + 1,
    createdAt: new Date().toISOString().split("T")[0],
  };
  articles.push(article);
  return article;
}

export async function updateArticle(
  id: number,
  data: Omit<Article, "id" | "author" | "createdAt">,
): Promise<Article> {
  const article = articles.find((a) => a.id === id);
  if (!article) throw new Error("Article not found");
  Object.assign(article, data);
  return article;
}
