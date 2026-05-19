import { Activity, useState } from "react";
import About from "./components/About";
import Home from "./components/Home";

export default function App() {
  // Problem: After refresh on about page, back to home page
  // Need to save the information at the route
  const [isHome, setIsHome] = useState(true);

  return (
    <>
      <nav>
        <button type="button" onClick={() => setIsHome((isHome) => !isHome)}>
          Toggle
        </button>
      </nav>

      <main>
        <Activity mode={isHome ? "visible" : "hidden"}>
          <Home />
        </Activity>
        <Activity mode={!isHome ? "visible" : "hidden"}>
          <About />
        </Activity>
      </main>
    </>
  );
}
