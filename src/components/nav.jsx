import { Link } from 'react-router-dom';
import Navbar from './navbar';
import '../nav.css'

export default function Nav() {
  return(
    <Navbar 
      links={[
        <Link id='portfolio' key={1} className='nav-link-item' to='/portfolio'>
          Portfolio
        </Link>,
        <Link id='about' key={2} className='nav-link-item' to='/'>
          About
        </Link>,
        <Link id='contact' key={3} className='nav-link-item' to='/contact'>
          Contact
        </Link>,
        <Link id='resume' key={4} className='nav-link-item' to='/resume'>
          Resume
        </Link>
      ]}/>
  );
}