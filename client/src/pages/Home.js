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
              <img src="/assets/images/outside.jpg" />
              <span class="card-title">Mind</span>
            </div>
            <div class="card-content">
              <p>Regular campers will often talk about how the first few days back from a trip seem happier. This isn't without merit; spending some time outside in the sunlight can even out the levels of melatonin in your brain. Melatonin is the chemical that makes you feel tired and can induce feelings of depression, so by camping, you can enjoy better overall moods during and after your trip.</p>
            </div>
          </div>
        </div>

        <div class="col s12 m3">
          <div class="card">
            <div class="card-image">
              <img src="/assets/images/climber3.jpg" />
              <span class="card-title">Body</span>
            </div>
            <div class="card-content">
              <p>From hiking, biking, fishing, canoeing and more, when you’re out camping you will find that exercise comes naturally and easily. These fun activities mixed with setting up your campsite, walking to bathrooms, building fires and more all involve more exercise than they do in your normal environment. Your body will thank you for seeking the great outdoors!</p>
            </div>
          </div>
        </div>

        <div class="col s12 m3">
          <div class="card">
            <div class="card-image">
              <img src="/assets/images/meditating-outdoors.jpg" />
              <span class="card-title">Spirit</span>
            </div>
            <div class="card-content">
              <p>When you go camping, don't forget to turn off your cell phone. Leave the tablet and the laptop computer at home. Try to disconnect for a few days and enjoy the simplicity of the natural experience. This isn't just a general tip to help you enjoy the experience; if you're willing to enjoy your surroundings without any outside distractions, you could increase your lifespan. </p>
            </div>
          </div>
        </div>
        <div class="col s12 m1"></div>
      </div>

    </div>
  );
}

export default Home;
