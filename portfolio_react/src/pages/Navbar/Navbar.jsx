import { Link } from 'react-router-dom';
import './navbar.css'
import logo from '../../assets/Logo_RM.png'

function Navbar ({ isDarkMode, toggleDarkMode }) {
  return (
    <nav className='navbar'>
      <img src={logo} alt="Logo d'un koala qui regarde vers le ciel en souriant" className='nav-img' />
      <div>
        <Link to="/" className='listItem'>Home</Link>
        <Link to="/about" className='listItem'>About</Link>
        <Link to="/contact" className='listItem'>Contact</Link>
        <Link to="/works" className='listItem'>Works</Link>
      </div>
      <button className='nav-btn' onClick={toggleDarkMode}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </nav>
  );
}

export default Navbar;