import React, { useState } from 'react'
import './style.css';
import {Link} from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

function Sidebar(props) {

    const [sidebarShow, setSidebarShow] = useState(false);
    const style={
        position:"absolute",
        left:"200px",
        top:"10px"
    }

    const handleClick = () => {
        setSidebarShow(!sidebarShow);
    }

  return (
    <>
    <Link onClick={handleClick} className='hamburger' to="#">
        <GiHamburgerMenu/>
    </Link>
    <nav id={sidebarShow ? "sidebar_active" : ""} className="sidebar_">
        <Link to="#">
            <p className='navbar-text'>About</p>
        </Link>
        <Link to="#">
            <p className='navbar-text'>Placements</p>
        </Link>
        <Link to="#">
            <p className='navbar-text'>Faculties</p>
        </Link>
        <Link to="#">
            <p className='navbar-text'>Contacts</p>
        </Link>
    </nav>
    </>
  )
}

export default Sidebar