export type Article = {
  id: number;
  title: string;
  content: string;
  author: string;
  createdAt: string;
};

export type PaginatedLoaderData<T> = {
  articles: T[];
  totalPages: number;
  page: number;
  search: string;
};
