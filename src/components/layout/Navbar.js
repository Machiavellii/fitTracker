import React from 'react';
import { Link } from 'react-router-dom';

// import '../../style/navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <i className="fas fa-walking"></i>
      </Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
