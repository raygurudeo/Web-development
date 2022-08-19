import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {

  const [showLink, setShowLink] = useState(false);

  // useRef we are using here to set height of menuBar dynamically based on menu item height getting from API.
  // we can get height of menu item by "linkRef.current.getBoundingClientRect().height" then
  // can apply same height to current DOM of menu container using "linksContainerRef.current.style.height = `${linksHeight}px`;"
  const linksContainerRef = useRef(null);
  const linkRef = useRef(null);

  useEffect(() => {
    const linksHeight = linkRef.current.getBoundingClientRect().height;
    console.log(linksHeight);
    if(showLink) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
    
  },[showLink])

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt='logo' className='logo'/>
          <button className="nav-toggle" onClick={() => setShowLink(!showLink)}>
            <FaBars />
          </button>
        </div>
         <div className={`${showLink? 'links-container show-container' : 'links-container'}`}
         ref = {linksContainerRef}>
          <ul className="links" ref={linkRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return <li key={id}>
                <a href={url}>{text}</a>
              </li>
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((smedia) => {
            const { id, url, icon } = smedia;
            return <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar
