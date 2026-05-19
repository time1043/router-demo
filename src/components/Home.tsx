import { useSearchParams } from "react-router";

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams();

  const count = Number(searchParams.get("count")) || 0;
  const setCount = () => setSearchParams({ count: String(count + 1) });

  return (
    <div>
      Home
      <button type="button" onClick={() => setCount()}>
        {count}
      </button>
    </div>
  );
}
