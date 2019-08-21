import React from "react";
import NavBar from "../components/NavBar";
import ParkCard from "../components/ParkCard";
import './cart.css';


function Cart() {
    var sectionStyle = {
        backgroundImage: `url("/assets/images/rainforest.jpg")`

    };

    return (
        <div style={sectionStyle}>
            <NavBar />


            <h1>Your cart:</h1>


            <div id="h2" className="container blue-grey darken-1">Our mission at Selva is to show people how easy it is to enjoy the
                great outdoors. The translation of the word Selva actually means forest.
                If you are a begginer or even an advanced camper, we aim to help all our
                fellow campers with the essential gear they will need, as well as supplies
                for any recreational activities you have in mind.

            </div>

    
        </div>
    )

}

export default Cart;