import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {

  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);

  const clickHandle = (e) => {
    e.preventDefault();

    // adding name and email in people as a list
    if(firstName && email) {
      // using shorthand creating an array of two property name and email that is gonna add into people list
      const person = {id: new Date().getTime().toString(), firstName, email}
      setPeople((people) => {
        return [...people, person];
      });
      setFirstName('')
      setEmail('')
    } else {
      console.log('Empty values');
    }
  }
  return <article>
    <form className="form">
      <div className="form-control">
        <label htmlFor='firstName'>Name : </label>
        <input
         id='firstName'
         type='text'
         value={firstName}
         onChange={(e) => setFirstName(e.target.value)}/>
      </div>
      <div className="form-control">
        <label htmlFor='email'>Email : </label>
        <input
        id='email'
        type='text'
        value={email}
        onChange={(e) => {setEmail(e.target.value)}} />
      </div>
      <button type='submit' onClick={clickHandle}>add person</button>
    </form>
    {
      people.map((people, index) => {
        const {id, firstName, email} = people;
        return <div key={id} className='item'>
          <h4>{firstName}</h4>
          <p>{email}</p>
        </div>
      })
    }
  </article>;
};

export default ControlledInputs;
