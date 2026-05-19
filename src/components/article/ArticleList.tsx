import { Link, useLoaderData, useSearchParams } from "react-router";
import type { Article } from "../../libs/types";

export default function ArticleList() {
  const articles = useLoaderData<Article[]>();
  const [searchParams, setSearchParams] = useSearchParams();

  // Query params
  const search = searchParams.get("search") || "";
  const page = Number(searchParams.get("page")) || 1;
  const pageSize = 2;

  // Filter articles
  const filtered = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(search.toLowerCase()) ||
      article.author.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination
  const totalPages = Math.ceil(filtered.length / pageSize);
  const paginated = filtered.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div>
      <div className="list-header">
        <h2>Articles</h2>
        <Link to="/articles/new">+ New Article</Link>
      </div>

      {/* Search - updates query param */}
      <div className="search">
        <input
          type="text"
          placeholder="Search by title or author..."
          value={search}
          onChange={(e) => {
            setSearchParams({ search: e.target.value, page: "1" });
          }}
        />
      </div>

      {/* Article list - uses path param for detail */}
      <ul className="article-list">
        {paginated.map((article) => (
          <li key={article.id}>
            <Link to={`/articles/${article.id}`}>
              <h3>{article.title}</h3>
            </Link>
            <p>
              {article.author} · {article.createdAt}
            </p>
          </li>
        ))}
      </ul>

      {/* Pagination - updates query param */}
      <div className="pagination">
        <button
          disabled={page <= 1}
          onClick={() => setSearchParams({ search, page: String(page - 1) })}
        >
          Previous
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button
          disabled={page >= totalPages}
          onClick={() => setSearchParams({ search, page: String(page + 1) })}
        >
          Next
        </button>
      </div>
    </div>
  );
}
