import React from "react";

function UseCallBack() {
  let [count, setCount] = React.useState(0);
  const handleCall = React.useCallback(() => {
    setCount(count + 1);
  }, [count]);
  return (
    <div>
      <h1 className="">UseCallBack {count}</h1>
      <button type="" className="" onClick={handleCall}>
        Call
      </button>
    </div>
  );
}

export default UseCallBack;
