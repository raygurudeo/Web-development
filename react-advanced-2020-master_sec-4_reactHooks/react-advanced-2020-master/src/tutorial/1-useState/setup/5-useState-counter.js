import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  // this is example of complex counter where we are clicking many times on the increase button and it increases
  // value by 1 only because of "setValue" is a asynchronous function to resolve this we will be using functional
  // update form which is a function inside the setValue to make it synchronous.
  const complexIncrease = () => {
    setTimeout(() => {
      //setValue(value+1);  -> here it will increase by 1 only even if we are clicking button so many times
      setValue((prevState) => {
        return prevState + 1;
      })
    }, 2000);
  }
  return (
    <>
      <section style={{margin:'4rem 0', marginLeft:'150px'}}>
        <h2>Regular counter</h2>
        <h1>{value}</h1>
        <button type='button' className='btn' onClick={() => setValue(value-1)}>-</button>
        <button type='button' className='btn' onClick={() => setValue(0)}>reset</button>
        <button type='button' className='btn' onClick={() => setValue(value+1)}>+</button>

        <h2>Complex counter</h2>
        <h1>{value}</h1>
        <button type='button' className='btn' onClick={complexIncrease}>+</button>
      </section>
    </>
  );
};

export default UseStateCounter;
