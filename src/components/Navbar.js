import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">Forever in Love</h1>
      <ul className="nav-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#timeline">Our Story</a></li>
        <li><a href="#poster">Love Notes</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
