import { isRouteErrorResponse, Link, useRouteError } from "react-router";

export default function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div className="error-boundary">
        <h2>
          {error.status} {error.statusText}
        </h2>
        <p>{error.data}</p>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="error-boundary">
      <h2>Unexpected Error</h2>
      <p>{error instanceof Error ? error.message : "Unknown error"}</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}
