import React from 'react';
import './style.css';

import { useSelector, useDispatch } from 'react-redux';

export default function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: 'INC' });
  };
  const decrement = () => {
    dispatch({ type: 'DEC' });
  };
  const addBy10 = () => {
    dispatch({ type: 'ADD', payload: 10 });
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
