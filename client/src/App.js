import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import NavBar from "./components/NavBar";
import ProductCard from "./components/Products";
import VideoHeader from './components/videoHeader';
import Image from './rainforest.jpg';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    fetch("/api/items").then(res => res.json())
    .then( data => {
      console.log(this.setState({
        products: data
      }))
    })
  }
  
  render() {
    return <div>
      <NavBar/>
      <video autoPlay loop id="bgvid" src="/assets/video/camping.mp4" type="video/mp4" />
{/* 
      <div className="containter row">

      {this.state.products.map(ele => {
        return <ProductCard productName={ele.name} />
      })}
      </div>

    </div>

  }
}

export default App;
