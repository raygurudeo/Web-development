import React, { useState } from 'react';

// useState hooks with object
const UseStateObject = () => {
  // const [person, setPerson] = useState(
  //   {
  //     name:'Guru',
  //     age: 26,
  //     message: 'Hey'
  //   });

    // We can use multi state value instead of using object directly
    const [name, setName] = useState('Prince');
    const [age, setAge] = useState(10);
    const [message, setMessage] = useState('hey react');

    const changeMessage = () => {
      // here we are using spread operator so only message will be updating in the current object and other key
      // and value will not be wiped out by setPerson function.
      //setPerson({...person, message:'Hello'});

      setMessage('Hey Prince');
    }
  return (
    <>
      <h2>{name}</h2>
      <h2>{age}</h2>
      <h2>{message}</h2>
      <button type='button' className='btn' onClick={changeMessage}>change message</button>
    </>
  );
};

export default UseStateObject;
