import React from "react";
import NavBar from "../components/NavBar";
import ParkCard from "../components/ParkCard";
import './cart.css';
import ProductCard from "../components/Products";

class Cart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            displayImg: []
        }
        fetch("/api/items").then(res => res.json()).then(data => {
            for (let i = 0; i < 3; i++) {
                this.setState({displayImg: [...this.state.displayImg, data[i]]})
                console.log(this.state.displayImg)
            }
        });
    }    
    
    sectionStyle = {
        backgroundImage: `url("/assets/images/rainforest.jpg")`

    };

    render() {
    return (
        <div style={this.sectionStyle}>
            <NavBar />


            <h1>Your cart:</h1>


            <br />
            <br />
            <br />
            <br />

            <div className="row">
                {this.state.displayImg.map(ele =>
                    <ProductCard data={ele} />

                )}
            </div>
    
        </div>
    )}

}



export default Cart;