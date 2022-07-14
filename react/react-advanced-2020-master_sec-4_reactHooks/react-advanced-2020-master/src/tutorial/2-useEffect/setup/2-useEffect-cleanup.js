import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  
  const reSize = () => {
    setSize(window.innerWidth);
  }

  useEffect(() => {
    console.log('useEffect');
    window.addEventListener('resize', reSize);
    return () => {
      console.log('cleanup');
      window.removeEventListener('resize', reSize); // we are cleaning up the events from the memory after its use getting over
    }
  }, [])
  return <>
    <h1>window size</h1>
    <h3>{size}</h3>
  </>;
};

export default UseEffectCleanup;
