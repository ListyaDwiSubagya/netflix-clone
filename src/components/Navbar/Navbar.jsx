import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search from '../../assets/search_icon.svg'
import bell from '../../assets/bell_icon.svg'
import profile from '../../assets/profile_img.png'
import caret from '../../assets/caret_icon.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbar-left">
            <img src={logo} alt="" />
            <ul>
                <li>Home</li>
                <li>TV Shows</li>
                <li>Movies</li>
                <li>My List</li>
                <li>Browse by languages</li>
            </ul>
        </div>
        <div className="navbar-right">
            <img className='icons' src={search} alt="" />
            <p>Children</p>
            <img className='icons' src={bell} alt="" />
            <div className="navbar-profile">
            <img className='profile' src={profile} alt="" />
            <img  src={caret} alt="" />
            <div className='dropdown'>
              <p>Sign Out of Netflix</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar