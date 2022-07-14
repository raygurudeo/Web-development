import { children } from 'cheerio/lib/api/traversing';
import React from 'react';
import ReactDOM  from 'react-dom';

// function Greeting() {

//   return <h4>This is my very first component.</h4>;
// }

// function Greeting() {

//   return (
//     <div>
//       <h1>Hello div</h1>
//     </div>
//   );
// }

// const Greeting = () => {

//   return React.createElement('h1', {}, 'Hello world!');
// };

// const Greeting = () =>  {

//   return React.createElement(
//     'div',
//     {},
//     React.createElement('h2',{},'Hello friend chai pi lo !')
//   );
// };

// JSX rules

// function Greeting() {

//   return (
//     <div>
//       <h3>Hello people</h3>
//       <ul>
//         <li>
//           <a href='#'>Hello world!</a>
//         </li>
//       </ul>
//     </div>
//   );
// }
// ReactDOM.render(<Greeting />, document.getElementById('root'));


/* Nested component in React */

// function Greeting() {

//   return (
//     <div>
//       <Person />
//       <Message />
//     </div>
//   );
// }

// const Person = () => <h2>Gurudeo ray</h2>
// const Message = () => <h2>This is my message from nested component.</h2>

//ReactDOM.render(<Greeting/>, document.getElementById('root'));

/* 21. MiniBook project */

// import './index.css'

// function Booklist() {

//   return <section className='booklist'>
//     <Book />
//     <Book />
    
//   </section>
// }

// function Book() {
//   return <article className='book'>
//     <img src='https://images-eu.ssl-images-amazon.com/images/I/51sJ6ZqgX1L._AC_SX184_.jpg' alt='' />
//     <Title />
//     <Author />
//   </article>
// }

// function Title() {
//   return <h1>The Maverick Effect: The Inside Story of India's IT Revolution Hardcover – 20 March 2022</h1>;
// }

// function Author() {
//   return <h4 style={{color: 'cadetblue', fontSize: '0.75rem', marginTop: '0.25rem'}}>Harish Mehta</h4>;
// }

// ReactDOM.render(<Booklist />, document.getElementById('root'));


/* 25. Props */

// import './index.css'
// const firstbook = {
//   img: 'https://images-eu.ssl-images-amazon.com/images/I/51sJ6ZqgX1L._AC_SX368_.jpg',
//   title: 'The Maverick Effect',
//   author: 'Harish Mehta',
// }

// const secondbook = {
//   img: 'https://images-eu.ssl-images-amazon.com/images/I/4182HiRBajL._AC_SX368_.jpg',
//   title: 'Young Mungo',
//   author: 'Douglas Stuart',
// }

// function Booklist() {

//   return (
//     <section className='booklist'>
//       <Book img={firstbook.img} 
//         title={firstbook.title} 
//         author={firstbook.author} 
//       />
//       <Book img={secondbook.img} 
//         title={secondbook.title} 
//         author={secondbook.author} 
//       >
//         <button>Click</button>
//       </Book>
//     </section>
//   )
// }

// function Book(props) {

//   return (
//     <article className='book'>
//       <img src={props.img} alt='' />
//       <h1>{props.title}</h1>
//       <h4>{props.author}</h4>
//       {props.children}
//     </article>
//   );
// }

// ReactDOM.render(<Booklist />, document.getElementById('root'));





/* 29. Proper list */

// import './index.css'
// const books = [
//   {
//   img: 'https://images-eu.ssl-images-amazon.com/images/I/51sJ6ZqgX1L._AC_SX368_.jpg',
//   title: 'The Maverick Effect',
//   author: 'Harish Mehta',
//  },
// {
//   img: 'https://images-eu.ssl-images-amazon.com/images/I/4182HiRBajL._AC_SX368_.jpg',
//   title: 'Young Mungo',
//   author: 'Douglas Stuart',
// }
// ];

// function Booklist() {
//   return(
//     <section className='booklist'>
//       {books.map((book) => {
//         return <Book book={book}></Book>
//       })}
//     </section>
//   );
// }

// function Book(props) {
//   const {img, title, author} = props.book;
//   return(
//     <article className='book'>
//       <img src={img} alt='' />
//       <h1>{title}</h1>
//       <h4>{author}</h4>
//     </article>
//   );
// }
// ReactDOM.render(<Booklist />, document.getElementById('root'));

/* 29. Proper list  and even basics as well*/

import './index.css'
import { books } from './books'  // named import
import  Book  from './book'      // default import
import { greeting } from './testing/testing'

function Booklist() {
  console.log(greeting);
  return (
  <section className='booklist'>
     { books.map((book, index) => {
       return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

ReactDOM.render(<Booklist />, document.getElementById('root'));

