import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const {name, job, image, text} = people[index];

const checkNumber = (num) => {
  if(num < 0) {
    return people.length -1;
  }
  if(num > people.length-1) {
    return 0;
  }
  return num;
}
const randomReview = () => {
  let randomNum = Math.floor(Math.random() * people.length);
  if(randomNum === index) {
    randomNum = index + 1;
  }
  setIndex(checkNumber(randomNum));
  // console.log(randomNum);
} 
  
return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='btn-container'>
        <button className='prev-btn' onClick={() => index <= 0 ? setIndex(people.length-1) : setIndex(index-1)}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={() => index >= people.length-1 ? setIndex(0) : setIndex(index+1)}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={randomReview}>
          random review
      </button>
    </article>
  );
};

export default Review;
