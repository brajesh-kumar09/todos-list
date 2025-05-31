import React from 'react';
import logo from './todolistlogo.png';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav>
      <div className="navbar">
        <Link id='logo' to="/"><img src={logo} alt="To Dos" /></Link>
        <div className="nav-links">
          <Link to="/about">About</Link>
          <Link to="/">Sign Up</Link>
        </div>
      </div>
    </nav>

  )
}
