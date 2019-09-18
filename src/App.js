import React from 'react';
import './App.css';
import Home from "./components/Home";
import Streams from "./components/Streams";
import Carousel from "./components/Carousel"
import Footer from "./components/Footer";
import Countdown from "./components/Countdown";

function App() {
    return (
        <div className="App">
            <Home/>
            <Streams/>
            <Carousel/>
            <Countdown timeTillDate="09 21 2019, 8:00 am" timeFormat="MM DD YYYY, h:mm a"/>
            <Footer/>
        </div>
    );
}

export default App;
