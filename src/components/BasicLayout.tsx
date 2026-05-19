import { Outlet, useLocation, useNavigate } from "react-router";

export default function BasicLayout() {
  const navigate = useNavigate();
  const { pathname, search } = useLocation();

  function togglePage() {
    if (pathname === "/") navigate(`/about${search}`);
    else navigate(`/${search}`);
  }

  return (
    <>
      <nav>
        <button type="button" onClick={togglePage}>
          Toggle
        </button>
      </nav>

      <main>
        <Outlet />
      </main>
    </>
  );
}
