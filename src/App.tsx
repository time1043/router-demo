import { useState } from "react";
import About from "./components/About";
import Home from "./components/Home";

const pages = {
  home: Home,
  about: About,
};

export default function App() {
  // Problem: After refresh on about page, back to home page
  // Need to save the information at the route
  const [page, setPage] = useState("home");
  const CurrentPage = pages[page];

  return (
    <>
      <nav>
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("about")}>About</button>
      </nav>

      <main>
        <CurrentPage />
      </main>
    </>
  );
}
