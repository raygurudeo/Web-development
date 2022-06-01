import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    const restOfPeople = people.filter((person) => person.id !== id);
    setPeople(restOfPeople);
  }
  return (
    <>
      {
        people.map((person) => {
          const {id, name} = person;
          return (
            <div key={id} className='item'>
              <h4>{name}</h4>
              {/* button to remove particular item */}
              <button onClick={() => removeItem(id)}>remove</button> 
            </div>
          );
        })
      }
      {/* button to remove all item */}
      <button type='button' className='btn' onClick={() => setPeople([])}>  
        Clear items
      </button>
    </>
  );
};

export default UseStateArray;
