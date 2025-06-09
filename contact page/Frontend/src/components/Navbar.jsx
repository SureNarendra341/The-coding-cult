import React from 'react';
import '../styles/Navbar.css';

const Navbar = ({ title }) => {
  return (
    <nav className="navbar">
      <div className="logo">Job</div>
      <ul className="nav-links">
        <li><a href="#contact">{title}</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;