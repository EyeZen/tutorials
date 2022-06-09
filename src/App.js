import React from 'react';
import './style.css';

import { useSelector, useDispatch } from 'react-redux';
import { actions } from './store/index';

export default function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const increment = () => {
    console.log(actions)
    dispatch(actions.increment());
  };
  const decrement = () => {
    console.log(actions)
    dispatch(actions.decrement());
  };
  const addBy10 = () => {
    console.log(actions)
    dispatch(actions.add(10));
  };

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={addBy10}>Add by 10</button>
    </div>
  );
}
