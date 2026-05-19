import { createBrowserRouter } from "react-router";
import App from "./App";
import About from "./components/About";
import Home from "./components/Home";

// https://reactrouter.com/start/data/routing#route-objects
// https://reactrouter.com/start/data/routing#nested-routes
// https://reactrouter.com/start/data/routing#index-routes
export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
    ],
  },
]);
