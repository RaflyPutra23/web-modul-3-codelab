import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="about">About Us</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Outlet /> {/* Ini adalah tempat di mana komponen yang cocok dengan rute akan ditampilkan */}
    </div>
  );
}

export default Navbar;
