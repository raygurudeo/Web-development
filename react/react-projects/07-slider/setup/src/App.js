import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  // below useEffect used to handle if index becomes '0' or outOfIndex
  useEffect(() => {
    if(index < 0) {
      setIndex(people.length-1);
    }
    if(index >= people.length) {
      setIndex(0);
    }
  }, [index, people])

  // below useEffect used to invoke autoplay for slider
  useEffect(() => {
    const slider =  setInterval(() => {
      setIndex(index+1);
    }, 3000);

    // everytime index will change a setInterval will store that will cause application crash
    // so we need to clear setInterval after avery invoke'
    return () => clearInterval(slider);

  }, [index])

  return <section className='section'>
    <div className="title">
      <h2>
        <span>/</span>reviews
      </h2>
    </div>
    <div className="section-center">
      {people.map((person, personIndex) => {
        const {id, image, name, title, quote} = person;
        let position = 'nextSlide';
        if(personIndex === index) {
          position = 'activeSlide';
        }

        if(personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)) {
          position = 'lastSlide';
        }

        return <article className={position} key={id}>
          <img src={image} alt={name} className='person-img' />
          <h4>{name}</h4>
          <p className="title">{title}</p>
          <p className="quote">{quote}</p>
          <FaQuoteRight className='icon'></FaQuoteRight>
        </article>
      })}
      <button className="prev" onClick={() => setIndex(index-1)}>
        <FiChevronLeft />
      </button>
      <button className="next" onClick={() => setIndex(index+1)}>
        <FiChevronRight />
      </button>
    </div>
  </section>;
}

export default App;
