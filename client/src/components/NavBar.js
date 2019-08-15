import React from "react";

const NavBar = () => {
    return (
        <div className="navbar-fixed">
            <nav className="black">
                <div className="nav-wrapper">
                    <div className="container">
                        <a href="#" className="brand-logo center">
                            Logo
            </a>
                        <ul id="nav-mobile" className="right hide-on-small-and-down">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li className="active">
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;