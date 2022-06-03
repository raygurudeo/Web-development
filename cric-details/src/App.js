import React, { useState } from 'react';
import './App.css';
import CricketerList from './cricketerList'
import data from './data'

function App() {
  const [cricketer, setCricketer] = useState(data);
  console.log(cricketer);
  return (
    <>
      <section className='container' style={{marginLeft: "200px"}}>
        <h4>Team size : {cricketer.length}</h4>
        <CricketerList cricProperty={cricketer}/>
        <button type='buttton' className='btn' onClick={() => setCricketer([])}>clear</button>
      </section>
    </>
  );
}

export default App;
