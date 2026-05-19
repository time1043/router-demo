import { createBrowserRouter } from "react-router";
import App from "./App";
import About from "./components/About";
import ArticleCreate from "./components/article/ArticleCreate";
import ArticleDetail from "./components/article/ArticleDetail";
import ArticleEdit from "./components/article/ArticleEdit";
import ArticleLayout from "./components/article/ArticleLayout";
import ArticleList from "./components/article/ArticleList";
import {
  articleDetailLoader,
  articleListLoader,
} from "./components/article/loader";
import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./components/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    // errorElement: <ErrorBoundary />,
    ErrorBoundary: ErrorBoundary,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      {
        path: "articles",
        Component: ArticleLayout,
        children: [
          { index: true, Component: ArticleList, loader: articleListLoader },
          { path: "new", Component: ArticleCreate },
          {
            path: ":id",
            Component: ArticleDetail,
            loader: articleDetailLoader,
          },
          {
            path: ":id/edit",
            Component: ArticleEdit,
            loader: articleDetailLoader,
          },
        ],
      },
    ],
  },
]);
