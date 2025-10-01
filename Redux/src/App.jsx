import React from "react";
import { useDispatch } from "react-redux";
import Display from './Display.jsx';

const App = () => {
  let dispatch = useDispatch();

  const handleIn = () => {
    dispatch({ type: "IN" });
  };
  const handleDec = () => {
    dispatch({ type: "DEC" });
  };
  return (
    <div>
      <Display/>
      <button onClick={handleIn}>+</button>
      <button onClick={handleDec}>-</button>
    </div>
  );
};
export default App
