import '../Styles/Navbar.css'
import { NavLink } from 'react-router-dom'

import Logo from '../Assets/logo.png'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='contain flex'>
        <div className="logo">
            <NavLink to='/home'>
            <img src={Logo} alt="Logo" />
            </NavLink>
        </div>
        <ul className='nav-links'>
            <NavLink  to='/home'>Home</NavLink>
            <NavLink to=''>About</NavLink>
            <NavLink to=''>Contact</NavLink>
            <NavLink to='/profile'>Profile</NavLink>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar