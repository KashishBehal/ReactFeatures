import React, { useState, startTransition } from 'react';

function Concurrent() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
 startTransition(() => {
      setCount(count + 1); 
    });
  };
  return (
    <div>
        <h1>Concurrent Mode Example</h1>

      <button onClick={handleClick}>Increment</button>
      <h1>{count}</h1>
    </div>
  );
}

export default Concurrent;
