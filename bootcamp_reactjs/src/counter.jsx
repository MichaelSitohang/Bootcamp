// Counter.js (JSX)
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';

const Counter = () => {
  const count = useSelector((state) => state.count);  // Ambil nilai count dari Redux state
  const dispatch = useDispatch();  // Dispatch action ke Redux

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter: {count}</h1>
      {/* Tombol untuk menambah angka */}
      <button
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          marginRight: '10px',
        }}
        onClick={() => dispatch(increment())}
      >
        +
      </button>
      {/* Tombol untuk mengurangi angka */}
      <button
        style={{
          padding: '10px 20px',
          fontSize: '16px',
        }}
        onClick={() => dispatch(decrement())}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
