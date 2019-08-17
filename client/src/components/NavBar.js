import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {
return (
    <div className="navbar-fixed">
      <nav className="transparent">
        <div className="nav-wrapper">
          <div className="container">
            <ul id="nav-mobile" className="right hide-on-small-and-down">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about" className="nav">
                  About
                </Link>
              </li>
              <li>
                <Link to="/products" className="nav">
                  Products
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;