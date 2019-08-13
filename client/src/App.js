import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
// import './App.css';

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
};

const ProductCard = props =>{
  return (
<div class="col s12 m6">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">{props.productName}</span>
        </div>
        <div class="card-action">
          <a href="#">Buy Product</a>
        </div>
      </div>
    </div>
  )
}

class App extends Component {
  render() {
    return <div>
      <NavBar/>
      <div className="containter row">
      <ProductCard productName= "Tent"/>
      <ProductCard productName= "Pole"/>
      <ProductCard productName= "Gun"/>

      </div>
    </div>

  }
}

export default App;
