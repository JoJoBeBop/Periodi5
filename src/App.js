import React from 'react';
import './App.css';
import Home from "./components/Home";
import Streams from "./components/Streams";
import Carousel from "./components/Carousel"
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Home/>
            <Streams/>
            <Carousel/>
            <Footer/>
        </div>
    );
}

export default App;
