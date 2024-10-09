import './App.css';
import { Outlet } from 'react-router-dom';
import Nav from './components/nav';
import Footer from './components/footer';

function App() {
  return (
    <div className='app-wrapper'>
      <Nav />
        <div className='content'>
          <Outlet />
        </div>
      <Footer />
    </div>
  )
}

export default App;