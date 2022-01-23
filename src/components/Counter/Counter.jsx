import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Controls from "./Controls";
import Value from "./Value";
import { increment, decrement } from "../../redux/counter-actions";
import s from "./Counter.module.css";
import { getStep, getValue } from "../../redux/counter-selectors";

function Counter() {
  const dispatch = useDispatch();
  const value = useSelector(getValue);
  const step = useSelector(getStep);
  const onIncrement = (value) => dispatch(increment(value));
  const onDecrement = (value) => dispatch(decrement(value));

  return (
    <div className={s.Sections}>
      <h1>COUNTER</h1>
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

// const mapStateToProps = (state) => ({
//   value: state.counter.value,
//   step: state.counter.step,
// });
// const mapDispatchToProps = (dispatch) => ({
//   onIncrement: (value) => dispatch(increment(value)),
//   onDecrement: (value) => dispatch(decrement(value)),
// });

export default Counter;
