import React from 'react';
import Review from './Review';
import { FaGithubSquare } from 'react-icons/fa'
function App() {
  return (
    <main>
      <section className='container'>
        <div className='title'>
          <h2>our reviews</h2>
          <div className='underline'></div>
          <Review />
        </div>
        <input type='file' capture='environment' accept='video/*'></input>
      </section>
    </main>
    );
}

export default App;
