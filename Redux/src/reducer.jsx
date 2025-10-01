const first = 0;
export const CounterReducer = (state = first, action) => {
  switch (action.type) {
    case "IN":
      return state + 1;
    case "DEC":
      return state - 1;

    default:
      return state
  }
};
