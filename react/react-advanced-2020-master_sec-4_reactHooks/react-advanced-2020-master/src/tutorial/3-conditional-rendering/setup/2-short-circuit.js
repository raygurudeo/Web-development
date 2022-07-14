import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false);

  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';

  return <>
    {/* <h2>{firstValue}</h2>
    <h3>{secondValue}</h3> */}
    <h3>{text || 'John'}</h3>
    <button className='btn' onClick={() => setIsError(!isError)}>toggle err</button>
    {isError && <h4>error...</h4>}
    {isError ? <p>There is an error...</p> : <p>There is no error...</p>}
  </>;
};

export default ShortCircuit;
