import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div>
      Home
      <button type="button" onClick={() => setCount((count) => count + 1)}>
        {count}
      </button>
    </div>
  );
}
