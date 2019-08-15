import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import NavBar from "./components/NavBar";
import ProductCard from "./components/Products";
import VideoHeader from './components/videoHeader';
import Image from './rainforest.jpg';


class App extends Component {
  render() {
    return <div>
      <NavBar/>
      <video autoPlay loop id="bgvid" src="/assets/video/camping.mp4" type="video/mp4" />
{/* 
      <div className="containter row">
      <ProductCard productName= "Tent"/>
      <ProductCard productName= "Pole"/>
      <ProductCard productName= "Gun"/>

      </div> */}
    </div>

  }
}

export default App;
