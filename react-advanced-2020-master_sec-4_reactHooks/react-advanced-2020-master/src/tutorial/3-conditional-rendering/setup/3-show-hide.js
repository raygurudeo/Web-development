import { prop } from 'cheerio/lib/api/attributes';
import React, { useState, useEffect } from 'react';

const ShowHide = () => {

    const [show, setShow] = useState(false);
    const [size, setSize] = useState(window.innerWidth);

    const reSize = () => {
      setSize(window.innerWidth);
    }

    useEffect(() => {
      window.addEventListener('resize', reSize);
      return () => {
        window.removeEventListener('resize',reSize);
      }
    },[])

  return <>
    <button className='btn' onClick={() => setShow(!show)}>show/hide</button>
    {show && <WindowSize sizeProperty={size}/>}
  </>;
};

const WindowSize = (props) => {
  return <div>
    <h3>window size</h3>
    <h4>value : {props.sizeProperty}</h4>
  </div>;
}

export default ShowHide;
