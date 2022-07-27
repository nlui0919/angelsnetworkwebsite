import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}> Alexs IQ: {count} </button>
  );
};

export default Counter;