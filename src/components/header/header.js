import React from 'react';
import logo from "../../asset/logo.jfif";
import "./Header.css"
const Header = () => {
    return (
        <div className="nav-container">
          <nav className="navbar navbar-light bg-light">
            <div className="ps-5">
              <img src={logo} alt="" />
              <a href="/" className="navbar-brand font-weight-bold">
                Breaking-Your-Body
              </a>
            </div>
          </nav>
        </div>
      );
};

export default Header;