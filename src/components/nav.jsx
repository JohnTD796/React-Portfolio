import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './navbar';
import '../nav.css'

export default function Nav() {
  const [currentPage, setPage] = useState('/');

  useEffect(() => {
    const savedPage = localStorage.getItem('currentPage');
    if (savedPage) {
      setPage(savedPage)
    }
  }, []);

  const handlePageChange = (page) => {
    setPage(page);
    localStorage.setItem('currentPage', page);
  };

  return(
    <Navbar 
      links={[
        <Link 
          id='portfolio' 
          key={1} 
          className= {`${currentPage === '/portfolio' ? 'nav-link-item-active' :'nav-link-item'}`}
          to='/portfolio'
          onClick={() => handlePageChange('/portfolio')}
          >
          Portfolio
        </Link>,
        <Link 
          id='about' key={2} 
          className= {`${currentPage === '/' ? 'nav-link-item-active' :'nav-link-item'}`}
          to='/'
          onClick={() => handlePageChange('/')}
          >
          About
        </Link>,
        <Link 
          id='contact' 
          key={3} 
          className= {`${currentPage === '/contact' ? 'nav-link-item-active' :'nav-link-item'}`}
          to='/contact'
          onClick={() => handlePageChange('/contact')}
          >
          Contact
        </Link>,
        <Link 
          id='resume' 
          key={4}
          className= {`${currentPage === '/resume' ? 'nav-link-item-active' :'nav-link-item'}`}
          to='/resume'
          onClick={() => handlePageChange('/resume')}
          >
          Resume
        </Link>
      ]}/>
  );
}