import React from "react";

function UseMemoHook() {
  let [count, setCount] = React.useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  let counting = React.useMemo(() => {
    return count * 2;
  }, [count]);
  return (
    <div>
      <h1>UseMemo {count}</h1>
      <p>Check the console for output. {counting}</p>

      <button type="" className="" onClick={handleClick}>
        Click
      </button>
    </div>
  );
}

export default UseMemoHook;
