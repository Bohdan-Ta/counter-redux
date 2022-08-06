import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Controls from "./Controls";
import Value from "./Value";
import { increment, decrement } from "../../redux/counter-actions";
import s from "./Counter.module.css";
import { getStep, getValue } from "../../redux/counter-selectors";

export default function Counter() {
  const dispatch = useDispatch();
  const value = useSelector(getValue);
  const step = useSelector(getStep);
  const onIncrement = (value) => dispatch(increment(value));
  const onDecrement = (value) => dispatch(decrement(value));

  return (
    <div className={s.Sections}>
      <h1 className={s.Counter_heading}>COUNTER</h1>
      <div className={s.Counter}>
        <Value value={value} />

        <Controls
          step={step}
          onIncrement={() => onIncrement(step)}
          onDecrement={() => onDecrement(step)}
        />
      </div>
    </div>
  );
}
