import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import counterReducer from "./counter-reducer";

// const reducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case "counter/Increment":
//       return {
//         ...state,
//         counter: {
//           ...state.counter,
//           value: state.counter.value + payload,
//         },
//       };
//     case "counter/Decrement":
//       return {
//         ...state,
//         counter: {
//           ...state.counter,
//           value: state.counter.value - payload,
//         },
//       };
//     default:
//       return state;
//   }
// };
// const counterInitialState = { value: 0, step: 1 };

// const valueReducer = (state = 0, { type, payload }) => {
//   switch (type) {
//     case "counter/Increment":
//       return state + payload;
//     case "counter/Decrement":
//       return state - payload;
//     default:
//       return state;
//   }
// };
// const stepReducer = (state = 5, action) => state;

// const counterReducer = combineReducers({
//   value: valueReducer,
//   step: stepReducer,
// });

// const counterReducer = (state = counterInitialState, { type, payload }) => {
//   switch (type) {
//     case "counter/Increment":
//       return {
//         ...state,
//         value: state.value + payload,
//       };
//     case "counter/Decrement":
//       return { ...state, value: state.value - payload };
//     default:
//       return state;
//   }
// };

const rootReducer = combineReducers({
  counter: counterReducer,
});

const store = createStore(rootReducer, composeWithDevTools());
export default store;
