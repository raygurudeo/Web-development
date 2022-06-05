import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {

  const [users, setUser] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUser(users);  // here we are setting users (setting state value) which we have initialized with empty array in useStste'
  }

  useEffect(() => {
    getUsers();
  }, [])             // giving empty [] as 2nd param to avoid empty loop( actually if we will not give a empty array)
  // it will call getUsers() after every re render of comp that will create infinity loop
  return <>
    <h2>github users</h2>
    <ul className='users'>
      {users.map((user) => {
        const {id, login, avatar_url, html_url} = user;
        return (
          <li key={id}>
            <img src={avatar_url} alt={login} />
            <div>
              <h4>{login}</h4>
              <a href={html_url}>@profile</a>
            </div>
          </li>
        );
      })}
    </ul>
  </>;
};

export default UseEffectFetchData;
