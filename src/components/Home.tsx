import { useOutletContext } from "react-router";
import type { ContextType } from "./BasicLayout";

export default function Home() {
  const [count, setCount] = useOutletContext<ContextType>();

  return (
    <div>
      Home
      <button type="button" onClick={() => setCount((count) => count + 1)}>
        {count}
      </button>
    </div>
  );
}
