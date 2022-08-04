import React from 'react'
import './style.css';

function Footer() {
  return (
    <div className="footer">
        <div className="programs">
            <h2 className='footer-heading'>Programs</h2>
            <p className='footer-item'>BigFuture</p>
            <p className='footer-item'>SAT</p>
            <p className='footer-item'>Spring Board</p>
            <p className='footer-item'>Search</p>
        </div>
        <div className="board">
            <h2 className='footer-heading'>College Board</h2>
            <p className='footer-item'>About us</p>
            <p className='footer-item'>Careers</p>
            <p className='footer-item'>Membership</p>
            <p className='footer-item'>Research</p>
        </div>
        <div className="programs">
            <h2 className='footer-heading'>Others</h2>
            <p className='footer-item'>Help</p>
            <p className='footer-item'>Privacy Center</p>
            <p className='footer-item'>Privacy Settings</p>
            <p className='footer-item'>Report Cheating</p>
        </div>
    </div>
  )
}

export default Footer