import { createStore } from "redux";
import { CounterReducer } from "./reducer";

export const mystore = createStore(CounterReducer);
