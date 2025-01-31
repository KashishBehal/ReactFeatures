import React, { forwardRef } from "react";

const ForwardRef = forwardRef((props, ref) => {
  return (
    <div>
      <h1>ForwardRef Example</h1>
      <div>
        <input type="text" ref={ref} />
      </div>
    </div>
  );
});

export default ForwardRef;
