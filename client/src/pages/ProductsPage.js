import React from 'react';
// import data from "./data.json";
import NavBar from "../components/NavBar";

import ProductCard from "../components/Products";



class ProductsPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displayImg: []
    }
    fetch("/api/items").then(res => res.json()).then(data => this.setState({displayImg: data}));
  }

  render() {
    return (
      <div>
        <NavBar />

        <div className="row">
          {this.state.displayImg.map(ele =>
            <ProductCard data={ele} />

          )}
        </div>

      </div>
    )
  }
}


export default (ProductsPage)