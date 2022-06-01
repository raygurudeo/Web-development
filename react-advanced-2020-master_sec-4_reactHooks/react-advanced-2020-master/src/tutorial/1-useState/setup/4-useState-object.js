import React, { useState } from 'react';

// useState hooks with object
const UseStateObject = () => {
  const [person, setPerson] = useState(
    {
      name:'Guru',
      age: 26,
      message: 'Hey'
    });

    const changeMessage = () => {
      // here we are using spread operator so only message will be updating in the current object and other key
      // and value will not be wiped out by setPerson function.
      setPerson({...person, message:'Hello'});
    }
  return (
    <>
      <h2>{person.name}</h2>
      <h2>{person.age}</h2>
      <h2>{person.message}</h2>
      <button type='button' className='btn' onClick={changeMessage}>change message</button>
    </>
  );
};

export default UseStateObject;
