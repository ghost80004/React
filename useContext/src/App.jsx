import React, { useState } from "react";
import Display from "./Display";
import { counter } from "./counterContext";
import { Provider } from "react-redux";

function App() {
  let [count, setCount] = useState();

  return (
    <div>
      <h1 className=""></h1>
      <button type="" className="" onclick={setCount(count + 1)}>
        +
      </button>
      <counter.Provider value={counter}>
        <Display />
      </counter.Provider>
    </div>
  );
}

export default App;
