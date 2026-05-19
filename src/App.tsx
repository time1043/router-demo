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
          className={({ isActive, isPending }) =>
            [isActive ? "active" : "", isPending ? "pending" : ""]
              .filter(Boolean)
              .join(" ")
          }
          end
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            [isActive ? "active" : "", isPending ? "pending" : ""]
              .filter(Boolean)
              .join(" ")
          }
        >
          About
        </NavLink>
        <NavLink
          to="/articles"
          className={({ isActive, isPending }) =>
            [isActive ? "active" : "", isPending ? "pending" : ""]
              .filter(Boolean)
              .join(" ")
          }
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
