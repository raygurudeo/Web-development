import React, { useState } from 'react';

const UseStateBasics = () => {
  // console.log(useState('hello world'));
  // const temp = useState(2)[0];
  // const temp1 = useState(2)[1];
  // console.log(temp, temp1);

  const [text, setText] = useState('current title');
  const handleClick = () => {
    if (text === 'current title') {
      setText('hello people !!');
    } else {
      setText('current title');
    }
  }
  return <React.Fragment>
    <h1>{text}</h1>
    <button type='button' className='btn' onClick={handleClick}>
    change title
    </button>
  </React.Fragment>
};

export default UseStateBasics;
