import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { increment, decrement } from "./counter-actions";

const valueReducer = createReducer(0, {
  [increment]: (state, action) => state + action.payload,
  [decrement]: (state, action) => state - action.payload,
});

const step = (state = 2, _) => state;

export default combineReducers({
  value: valueReducer,
  step,
});
