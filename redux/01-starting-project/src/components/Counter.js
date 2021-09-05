import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {counterActions}  from '../store/reducers/counter';

const Counter = () => {
  const dispatch = useDispatch();

  const counter = useSelector(state => state.counterReducer.counter);
  const showCounter = useSelector(state => state.counterReducer.showCounter)

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  }

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  }

  const increaseHandler = () => {
    dispatch(counterActions.increase(5)); // { type: SOME_UNIQUE_IDENTIFIER, payload: 10 }
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      { showCounter && <div className={classes.value}>{counter}</div> }
      <button onClick={incrementHandler}>Increment</button> <br /><br />
      <button onClick={decrementHandler}>Decrement</button> <br /><br />
      <button onClick={increaseHandler}>Increase by 5</button> <br /><br />
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
