import React from 'react';
import '../App.css';
import mvideo from "../samples/metropolia helsinki_Trim.mp4"
import { Link, animateScroll as scroll } from "react-scroll";

const Home = () => {


    return (
        <div className="HomeContainer">
            <video id="BackgroundVideo" loop autoPlay muted>
                <source src={mvideo} type="video/mp4"/>
            </video>

            <img src="https://fl-cdn.scdn1.secure.raxcdn.com/files/sites/756/parhaassaseurassa3.svg" alt="Espoo Liikkuu" className="MenuImage"/>

            <ul className="MenuContainer">
                <Link
                    className="MenuItems"
                    activeClass="active"
                    to="StreamContainer"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {500}
                >Striimit</Link>
                <Link
                    className="MenuItems"

                    activeClass="active"
                    to="TimeContainer"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {500}
                >Aikataulu</Link>
                <li className="MenuItems">#Badabing</li>
                <li className="MenuItems">Haku</li>


            </ul>


            {/*      <video id="background-video" loop autoPlay muted>
        <source src="http://techslides.com/demos/sample-videos/small.ogv" type="video/mp4" />
        <source src="http://techslides.com/demos/sample-videos/small.ogv" type="video/ogg" />
        Your browser does not support the video tag.
      </video>  */}

{/*
            <div id="playerElement"> </div>
*/}
        </div>
    );


};

export default Home;
