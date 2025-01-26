import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Saylani Microfinance</Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/calculator">Loan Calculator</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;