import React from 'react'
import './style.css'
import {Link} from 'react-router-dom';

function NavBar() {
  return (
    <div className="navbar">
        <Link style={{textDecoration:"none"}} to="/">
          <h1 className='nav-logo'>Campa 360</h1>
        </Link>
        <div className='nav-items'>
            <p>About us</p>
            <p>Contact us</p>
        </div>
    </div>
  )
}

export default NavBar