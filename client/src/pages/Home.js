import React from 'react';
import NavBar from '../components/NavBar';
import 'materialize-css/dist/css/materialize.min.css';
// import Background from '../images/rainforest.jpg';

import './home.css';

function Home() {
  return (

    <div class="bg">

      <NavBar />
      <div id='title'>
        <div>Your Online Basecamp</div>
      </div>
      <video
      loop
        autoPlay
        
        id="bgvid"
        src="/assets/video/camping.mp4"
        type="video/mp4"
      />
      <div id="starlord">
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>

      </div>
      {/* <div className='bkgrdImage'>
      </div> */}
      
      </div>
      );
    }
    
    export default Home;
