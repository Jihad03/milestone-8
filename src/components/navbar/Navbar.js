import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <nav>
        <h2>
          <a href="/">CLASSY PC SHOP</a>
        </h2>
        <div className="nav-links">
          <a href="/home">Home</a>
          <a href="/about">About</a>
          <a href="/Login">
            <i className="fa-solid fa-right-to-bracket"></i> Login
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
