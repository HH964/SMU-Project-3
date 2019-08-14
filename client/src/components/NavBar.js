import React from "react";

const NavBar = () => {
    return (
        <div class="navbar-fixed">
            <nav class="black">
                <div class="nav-wrapper">
                    <div class="container">
                        <a href="#" class="brand-logo center">
                            Logo
            </a>
                        <ul id="nav-mobile" class="right hide-on-small-and-down">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li class="active">
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