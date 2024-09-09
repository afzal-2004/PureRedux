const redux = require("redux");
//  STEP 1 FOR REDUCER
const INETIAL_VALUE = {
  counter: 0,
};

const reducer = (store = INETIAL_VALUE, action) => {
  let Result;
  if (action.type === "INCREAMENT") {
    Result = { counter: store.counter + 1 };
  } else if (action.type === "SUBSTRACTION") {
    Result = { counter: store.counter - 1 };
  } else if (action.type === "ADDITION") {
    Result = { counter: store.counter + action.payload.number };
  }

  return Result;
};

//  STEP 2 CREATE STORE
const store = redux.createStore(reducer);

//  STEP 3 METHOD FOR SUBSCRIBER
const subscriber = () => {
  const state = store.getState();
  console.log(state);
};

//  STEP 4   DISPATCH FOR ACTIONS
store.subscribe(subscriber);
store.dispatch({ type: "INCREAMENT" });
store.dispatch({ type: "INCREAMENT" });
store.dispatch({ type: "SUBSTRACTION" });
store.dispatch({ type: "SUBSTRACTION" });
store.dispatch({ type: "ADDITION", payload: { number: 7 } });
