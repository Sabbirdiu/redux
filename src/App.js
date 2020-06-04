import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './components/actions';
function App() {
  //follow the reducer index file
  const counter = useSelector((state) => state.counter);
  const islogged = useSelector((state) => state.islogged);
  const dispatch = useDispatch();
  return (
    <div className='App'>
      <h2>Counter {counter}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {islogged ? <h3>yes i see</h3> : ''}
    </div>
  );
}

export default App;
