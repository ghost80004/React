import React from "react";
import { counter } from './counterContext';
import { useContext} from "react"
function Display() {
  let count  = useContext(counter);
  return (
    <>
      <div>Display {count}</div>
  
    </>
  );
}

export default Display;
