import { useEffect } from "react";
import { useOutletContext, useSearchParams } from "react-router";
import type { ContextType } from "./BasicLayout";

export default function Home() {
  const { count, setCount } = useOutletContext<ContextType>();
  const [searchParams, setSearchParams] = useSearchParams();

  // sync from URL to state on mount (e.g. shared link with ?count=5)
  useEffect(() => {
    const urlCount = Number(searchParams.get("count"));
    if (urlCount && urlCount !== count) setCount(urlCount);
  }, []);

  function handleClick() {
    const next = count + 1;
    setCount(next);
    setSearchParams({ count: String(next) });
  }

  return (
    <div>
      Home
      <button type="button" onClick={handleClick}>
        {count}
      </button>
    </div>
  );
}
