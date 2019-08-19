import React from 'react';
import NavBar from '../components/NavBar';
import 'materialize-css/dist/css/materialize.min.css';
// import Background from '../images/rainforest.jpg';

import './home.css';

function Home() {
  return (
    //does not start vidoe on chrome when 1st load pages happens
    <div>
      <NavBar />
      <video
      loop
        autoPlay
        
        id="bgvid"
        src="/assets/video/camping.mp4"
        type="video/mp4"
      />
    </div>
  );
}

export default Home;
