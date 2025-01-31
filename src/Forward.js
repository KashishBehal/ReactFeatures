import React, { useRef } from "react";
import ForwardRef from "./ForwardRef"; 

function Forward() {
  let inputRef = useRef(null);

  function updateInput() {
    if (inputRef.current) {
      inputRef.current.value = "1000"; 
    }
  }

  return (
    <div>
      <ForwardRef ref={inputRef} />
      <button onClick={updateInput}>Update InputBox</button>
    </div>
  );
}

export default Forward;
