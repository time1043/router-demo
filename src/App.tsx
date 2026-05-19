import { NavLink, Outlet, useNavigation } from "react-router";
import Spinner from "./components/Spinner";

export default function App() {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);

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

      {/* {navigation.state === "loading" && <Spinner />} */}
      {isNavigating && <Spinner />}

      <main>
        <Outlet />
      </main>
    </>
  );
}
