import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../ms-logo1.png';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Company Logo" className="navbar-logo" />
        </Link>
        <div className="navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">HOME</Link>
            </li>  
            <li className="nav-item">
              <Link className="nav-link" to="/products">SERVICES</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/gallery">MEMORIES</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacts">ENQUIRE</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
