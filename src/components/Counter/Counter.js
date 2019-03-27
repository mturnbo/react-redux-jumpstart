import React, { useState } from 'react';
import Button from 'components/Button';
import './Counter.scss';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="counter">
      <h2>Counter</h2>
      <div className="count">{count}</div>
      <Button label="-" onClick={() => decrement()} />
      <Button label="+" onClick={() => increment()} />
    </div>
  );
};

export default Counter;
