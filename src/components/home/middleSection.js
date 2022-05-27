import React, { useState } from 'react';
import { NavLink} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import BackgroundMid from '../../image/Soccer.png';
import data1 from "../data/textData1";


let sectionStyle = {
    backgroundImage: `url("${BackgroundMid}")`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
}

const MiddleSection = () => {
    const [showMore, setShowMore] = useState(false);
    const navigate = useNavigate();
  
    const handleClick = (e) => {
        const id = e.target.id;
        setShowMore(!showMore);
      };

      const handleRegister = () => {
        navigate("/requestToJoin");  // create a register component and add here 
      };
    return (
        <div className="wrapper">
            <section className="middlestartgrid">
                <div className="row">
                    <div className="column2" >
                        <div className="midColorPallet">
                            <div className="design1">
                                Are you interested, please send a request !
                                <input name='register' type="button" onClick={handleRegister} value="Send Request >>"></input>
                            </div>
                            <div className="midCoText">
                                {/* <img src="/images/des4.png"></img> */}
                                Do you love soccer ? Great footballers
                                always do great things ! What are you 
                                waiting for ?
                            </div>
                        </div>
                    </div>
                    <div style={sectionStyle} className="column2">
                    </div>
                </div>
            </section>
     
            <section className="middlegrids">
                <div className="row">
                    <div className="col-lg-15 col-sm-6">
                            <div className='row'>
                                <div className="col-lg-15 col-sm-6">
                                    <img src="/images/Group1.png"></img>
                                    <div className='row'>
                                        <div className="middleTextContent">        
                                            <p id="middleTextOverlay">
                                            {showMore ? data1.TextDataGrp : `${data1.TextDataGrp.substring(0, 100)} `}
                                            <button className="showMoreLess" onClick={ () => setShowMore(!showMore)}>
                                                {showMore ? "Show Less": "Show More"}
                                            </button>
                                             </p> 
                                        </div>
                                    </div>
                                </div>   
                            </div>
                    </div>
                    <div className="col-lg-15 col-sm-6">
                            <div className='row'>
                                <div className="col-lg-15 col-sm-6">
                                    <img src="/images/tact1.png"></img>
                                    <div className='row'>
                                        <div className="middleTextContent">
                                            <p id="middleTextOverlay">
                                            {showMore ? data1.TextDataTact : `${data1.TextDataTact.substring(0, 100)} `}
                                            <button className="showMoreLess" onClick={ () => setShowMore(!showMore)}>
                                                {showMore ? "Show Less": "Show More"}
                                            </button>
                                             </p>
                                        </div>
                                    </div>
                                </div>   
                            </div>
                    </div>

                    <div className="col-lg-15 col-sm-6">
                            <div className='row'>
                                <div className="col-lg-15 col-sm-6">
                                    <img src="/images/focus1.png"></img>
                                    <div className='row'>
                                        <div className="middleTextContent">
                                            <p id="middleTextOverlay">
                                            {showMore ? data1.TextDataFocus : `${data1.TextDataFocus.substring(0, 100)} `}
                                            <button className="showMoreLess" onClick={ () => setShowMore(!showMore)}>
                                                {showMore ? "Show Less": "Show More"}
                                            </button>
                                            </p> 
                                        </div>
                                    </div>
                                </div>   
                            </div>
                    </div>
                    <div className="col-lg-15 col-sm-6">
                            <div className='row'>
                                <div className="col-lg-15 col-sm-6">
                                     <img src="/images/fit2.png"></img>
                                    <div className="middleTextContent">
                                            <p id="middleTextOverlay">
                                            {showMore ? data1.TextDataFit : `${data1.TextDataFit.substring(0, 100)} `}
                                            <button className="showMoreLess" onClick={handleClick}>
                                                {showMore ? "Show Less": "Show More"}
                                            </button>
                                            </p> 
                                    </div>
                                </div>   
                            </div>
                    </div>
              </div>
            </section>
        </div>
    )
}
export default MiddleSection;