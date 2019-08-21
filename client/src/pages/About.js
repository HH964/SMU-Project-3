import React from "react";
import NavBar from "../components/NavBar";
import ParkCard from "../components/ParkCard";
// import Background from "/assets/images/rainforest.jpg";


import './about.css';

function About() {
    var sectionStyle = {
        backgroundImage: `url("/assets/images/rainforest.jpg")`

    };

    return(

        <div style={ sectionStyle }>
            <NavBar />
             
            
            <h1>Selva Supplies Mission Statement</h1>

           
            <div id="h2" className="container blue-grey darken-1">Our mission at Selva is to show people how easy it is to enjoy the 
                great outdoors. The translation of the word Selva actually means forest. 
                If you are a beginner or even an advanced camper, we aim to help all our 
                fellow campers with the essential gear they will need, as well as supplies 
                for any recreational activities you have in mind.  
                  
            </div>
            <h4>Recomended Campgrounds:</h4>
            
                <ParkCard />
        </div>
    )
    
}

export default About;