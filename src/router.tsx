import { createBrowserRouter } from "react-router";
import App from "./App";
import About from "./components/About";
import ArticleCreate from "./components/article/ArticleCreate";
import ArticleDetail from "./components/article/ArticleDetail";
import ArticleEdit from "./components/article/ArticleEdit";
import ArticleLayout from "./components/article/ArticleLayout";
import ArticleList from "./components/article/ArticleList";
import Home from "./components/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      {
        path: "articles",
        Component: ArticleLayout,
        children: [
          { index: true, Component: ArticleList },
          { path: "new", Component: ArticleCreate },
          { path: ":id", Component: ArticleDetail },
          { path: ":id/edit", Component: ArticleEdit },
        ],
      },
    ],
  },
]);
