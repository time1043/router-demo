import { NavLink, Outlet } from "react-router";

export default function App() {
  return (
    <>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
          end
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          About
        </NavLink>
        <NavLink
          to="/articles"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Articles
        </NavLink>
      </nav>

      <main>
        <Outlet />
      </main>
    </>
  );
}
