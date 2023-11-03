import React from 'react';
import './css/navbar.css' // Import the CSS file for styling

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <a href="/">Home</a>
        </li>
        <li className="nav-item">
          <a href="/products">Products</a>
        </li>
        <li className="nav-item">
          <a href="/cart">Cart</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
