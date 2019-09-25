import React from "react";
import ReactDOM from "react-dom";
import Counter from "./Counter";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "./index.css";

const initialState = { steps: 0 };

export const ADD_STEP = "ADD_STEP";
export const RESET = "RESET";

export function add_step() {
  return { type: ADD_STEP };
}

export function reset() {
  return { type: RESET };
}

function reducer(state = initialState, action) {
  console.log("Reducer here...", action);
  switch (action.type) {
    case ADD_STEP:
      return {
        steps: state.steps + 1
      };
    case RESET:
      return {
        steps: 0
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

const App = () => {
  return (
    <Provider store={store}>
      <div className="container-outer">
        <Counter />
      </div>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
