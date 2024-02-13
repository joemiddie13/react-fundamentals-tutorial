import React from 'react'
import './Title.css';
import { NavLink } from 'react-router-dom'
import RandomSpace from '../RandomSpace/RandomSpace';

function Title() {
  return (
    <div className='Title'>
      <header>
        <h1>SFPOPOS</h1>
        <h2 className='Title-Subtitle'>San Francisco's Privately Owned Public Spaces</h2>
        <div className='TitleLinks'>
          <NavLink className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
            to="/">List
          </NavLink>
          <NavLink 
            className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
            to="/about">About
          </NavLink>
          <RandomSpace />
        </div>
      </header>
    </div>
  )
}

export default Title