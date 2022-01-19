import { createAction } from "@reduxjs/toolkit";

export const increment = createAction("counter/Increment");
export const decrement = createAction("counter/Decrement");

// export const increment = (value) => ({
//   type: "counter/Increment",
//   payload: value,
// });

// export const decrement = (value) => ({
//   type: "counter/Decrement",
//   payload: value,
// });
