import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './navbar';
import '../nav.css'

export default function Nav() {
  const [currentPage, setPage] = useState('/');

  return(
    <Navbar 
      links={[
        <Link 
          id='portfolio' 
          key={1} 
          className= {`${currentPage === '/portfolio' ? 'nav-link-item-active' :'nav-link-item'}`}
          to='/portfolio'
          onClick={() => setPage('/portfolio')}
          >
          Portfolio
        </Link>,
        <Link 
          id='about' key={2} 
          className= {`${currentPage === '/' ? 'nav-link-item-active' :'nav-link-item'}`}
          to='/'
          onClick={() => setPage('/')}
          >
          About
        </Link>,
        <Link 
          id='contact' 
          key={3} 
          className= {`${currentPage === '/contact' ? 'nav-link-item-active' :'nav-link-item'}`}
          to='/contact'
          onClick={() => setPage('/contact')}
          >
          Contact
        </Link>,
        <Link 
          id='resume' 
          key={4}
          className= {`${currentPage === '/resume' ? 'nav-link-item-active' :'nav-link-item'}`}
          to='/resume'
          onClick={() => setPage('/resume')}
          >
          Resume
        </Link>
      ]}/>
  );
}