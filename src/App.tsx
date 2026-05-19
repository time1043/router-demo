import { useState } from "react";
import About from "./components/About";
import Home from "./components/Home";

export default function App() {
  // Problem: After refresh on about page, back to home page
  // Need to save the information at the route
  const [page, setPage] = useState("home");

  return (
    <>
      <nav>
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("about")}>About</button>
      </nav>

      <main>
        {page === "home" && <Home />}
        {page === "about" && <About />}
      </main>
    </>
  );
}
