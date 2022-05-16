import React from 'react';
import { NavLink} from 'react-router-dom';
import TopSection from "./home/topSection";
import MiddleSection from "./home/middleSection";
import BottomSection from "./home/bottomSection";
import BottomAllLevels from "./home/bottomAllLevels";
import Footer from "./footer";


const Home = () => {

    return (
        <div id="App">
            <hr></hr>
            <span className="line2"></span>
            <span className="line3"></span>
            <span className="line1"></span>
            <div id="triangle-topright"></div><br></br>
            <div className="row">
                <TopSection/>  
            </div> 
                <MiddleSection/>
            <div className="row">
                <BottomSection/> 
            </div> 
            <div className="row">
                <BottomAllLevels/> 
            </div> 
            <hr></hr>
            <Footer/>
        </div>
    )
}

export default Home;