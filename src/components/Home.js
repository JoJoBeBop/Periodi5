import React from 'react';
import '../App.css';
import mvideo from "../samples/metropolia helsinki.mp4"

const Home = () => {

  return (
    <div>
      <video id="background-video" loop  muted>
        <source src={mvideo} type="video/mp4"/>
      </video>

{/*      <video id="background-video" loop autoPlay muted>
        <source src="http://techslides.com/demos/sample-videos/small.ogv" type="video/mp4" />
        <source src="http://techslides.com/demos/sample-videos/small.ogv" type="video/ogg" />
        Your browser does not support the video tag.
      </video>  */}

      {/*<div id="playerElement"> </div>*/}
    </div>
  );


};

export default Home;
