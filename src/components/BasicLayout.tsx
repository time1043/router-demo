import { useState, type Dispatch, type SetStateAction } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";

export type ContextType = [
  count: number,
  setCount: Dispatch<SetStateAction<number>>,
];

export default function BasicLayout() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  function togglePage() {
    if (pathname === "/") navigate("/about");
    else navigate("/");
  }

  const [count, setCount] = useState(0);

  return (
    <>
      <nav>
        <button type="button" onClick={togglePage}>
          Toggle
        </button>
      </nav>

      <main>
        <Outlet context={[count, setCount] satisfies ContextType} />
      </main>
    </>
  );
}
