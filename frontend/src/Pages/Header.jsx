import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='head'>
      <nav>
        <ul>
            <li>
              <Link to={'/home'}>Home</Link>
              <Link to={'/about'}>About</Link>
              <Link to={'/contact'}>Contact</Link>
              <Link to={'/menu'}>Menu</Link>
              <Link to={'/'}>Logout</Link>
            </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header