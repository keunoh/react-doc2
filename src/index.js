import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 2)}>Click me</button>
    </div>
  );
}

export default Example;

ReactDOM.createRoot(document.getElementById("root")).render(<Example />);
