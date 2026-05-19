import { Link, Outlet } from "react-router";

export default function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <main>
        <Outlet />
      </main>
    </>
  );
}
