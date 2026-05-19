import { Outlet, useNavigation } from "react-router";
import AppLink from "./components/AppLink";
import Spinner from "./components/Spinner";

export default function App() {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);

  return (
    <>
      <nav>
        <AppLink to="/" end>
          Home
        </AppLink>
        <AppLink to="/about">About</AppLink>
        <AppLink to="/articles">Articles</AppLink>
      </nav>

      {/* {navigation.state === "loading" && <Spinner />} */}
      {isNavigating && <Spinner />}

      <main>
        <Outlet />
      </main>
    </>
  );
}
