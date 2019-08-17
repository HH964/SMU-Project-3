import React from 'react';
import data from "./data.json";
import NavBar from "../components/NavBar";

import ProductCard from "../components/Products";



class ProductsPage extends React.Component {
state ={
    displayImg: data
}

  render() {
    return (
      <div>
                <NavBar />

        {this.state.displayImg.map(ele =>
        <ProductCard data={ele}/>

        )}
      </div>
    )
  }
}


export default (ProductsPage)
