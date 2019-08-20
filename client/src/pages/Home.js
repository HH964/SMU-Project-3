import React from 'react';
import NavBar from '../components/NavBar';
import 'materialize-css/dist/css/materialize.min.css';

import './home.css';

function Home() {
  return (

    <div class="bg">

      <NavBar />
      <div id="logo">        
      <img src="/assets/images/SelvaSupplies.png" alt="logo" />       
</div>
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
        <div class='stars'></div>
        <div class='stars2'></div>
        <div class='stars3'></div>
      </div>

      <div className="container text-center mt-2 mb-5">
        <h3 className="heading"><font color="white">Take care of Yourself and the Planet</font></h3>
      </div>

      <div class="row">

        <div class="col s12 m1"></div>
        <div class="col s12 m3">
          <div class="card">
            <div class="card-image">
              {/* <img src /> */}
                <span class="card-title">Card Title</span>
              </div>
              <div class="card-content">
                <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
              </div>
            </div>
          </div>

        <div class="col s12 m3">
          <div class="card">
            <div class="card-image">
              {/* <img src={Background} /> */}
              <span class="card-title">Card Title</span>
            </div>
            <div class="card-content">
              <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
            </div>
          </div>
        </div>
        
        <div class="col s12 m3">
          <div class="card">
            <div class="card-image">
              {/* <img src={Background} /> */}
              <span class="card-title">Card Title</span>
            </div>
            <div class="card-content">
              <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
            </div>
          </div>
        </div>
        <div class="col s12 m1"></div>
        </div>

      </div>
      );
    }
    
    export default Home;
