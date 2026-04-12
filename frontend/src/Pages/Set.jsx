import React, { useState } from 'react'

function Set({ onChange }) {
  const [count,setCount]=useState(0);

  const increment=()=>{
    const newCount = count + 1;
    setCount(newCount);
    onChange(newCount);
  }

  const decrement=()=>{
    const newCount = count - 1 < 0 ? 0 : count - 1;
    setCount(newCount);
    onChange(newCount);
  }

  return (
    <div className='box'>
      <button onClick={increment}>+</button>
      <span>{count}</span>
      <button onClick={decrement}>-</button>
    </div>
  )
}

export default Set