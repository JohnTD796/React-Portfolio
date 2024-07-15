export default function Navbar({ links }) {
  return(
    <nav className='navbar'>
      <div className='title-container'>
      <h2>Doyle</h2>
      </div>
      <div className='navbar-container'>
        <div className='navbar-inner'>
          <ul className='navbar-links'>
            {links.map((link) => link)}
          </ul>
        </div>
      </div>
    </nav>
  )
}