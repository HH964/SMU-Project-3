import React from 'react';
import NavBar from '../components/NavBar';
import 'materialize-css/dist/css/materialize.min.css';
// import Background from '../images/rainforest.jpg';

import './home.css';

function Home() {
  return (
    <div>
      <NavBar />
      <video
        autoPlay
        loop
        id="bgvid"
        src="/assets/video/camping.mp4"
        type="video/mp4"
      />
    </div>
  );
}

export default Home;
