import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import NavBar from "./components/NavBar";
import ProductCard from "./components/Products";



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
