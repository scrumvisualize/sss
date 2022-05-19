import React from 'react';
import { NavLink} from 'react-router-dom';
import BackgroundMid from '../../image/Soccer.png';


let sectionStyle = {
    backgroundImage: `url("${BackgroundMid}")`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
}

const MiddleSection = () => {
    return (
        <div className="wrapper">
            <div className="row">
                <div className="column2" >
                    <div className="midColorPallet">
                        <div className="design1">
                            Want to showcase your soccer skills ?
                            Interested, please come along and join with us.
                            <input name='register' type="button" value="Register >>"></input>
                        </div>
                        <div className="midCoText">
                           Do you love soccer ? Great footballers
                           always do great things ! What are you 
                           waiting for ?
                       </div>
                    </div>
                </div>
                <div style={sectionStyle} className="column2">
                </div>
            </div>
            <section className="middlegrids">
                <div className="row">
                    <div className="col-lg-15 col-sm-6">
                            <div className='row'>
                                <div className="col-lg-15 col-sm-6">
                                    {/* <ul className='arrowText'>
                                        Stay
                                    </ul> */}
                                    <img src="/images/Group1.png"></img>
                                    <div className='row'>
                                        <div className="middleTextContent">
                                            <p id="middleTextOverlay">
                                            We are an awesome bunch of friendly people. We play 
                                            together for fun and enjoy every moment of soccer
                                            life. As a group we follow a slogan, Together we can !
                                            </p> 
                                        </div>
                                    </div>
                                </div>   
                            </div>
                    </div>
                    <div className="col-lg-15 col-sm-6">
                            <div className='row'>
                                <div className="col-lg-15 col-sm-6">
                                    {/* <ul className='arrowText'>
                                        Stay
                                    </ul> */}
                                    <img src="/images/tact1.png"></img>
                                    <div className='row'>
                                        <div className="middleTextContent">
                                            <p id="middleTextOverlay">
                                            We apply game tactics during
                                            friendly and major games. For 7 a side game or 11 a side game
                                            we usually come up with attacking tactics or  
                                            defensive tactics.
                                            </p> 
                                        </div>
                                    </div>
                                </div>   
                            </div>
                    </div>

                    <div className="col-lg-15 col-sm-6">
                            <div className='row'>
                                <div className="col-lg-15 col-sm-6">
                                    {/* <ul className='arrowText'>
                                        Stay
                                    </ul> */}
                                    <img src="/images/focus1.png"></img>
                                    <div className='row'>
                                        <div className="middleTextContent">
                                            <p id="middleTextOverlay">
                                            As a team we focus on team performance and
                                            individual performance of each and every
                                            player. As a team we focus to improve our 
                                            performance from different games.
                                            </p> 
                                        </div>
                                    </div>
                                </div>   
                            </div>
                    </div>
                    <div className="col-lg-15 col-sm-6">
                            <div className='row'>
                                <div className="col-lg-15 col-sm-6">
                                    {/* <ul className='arrowText'>
                                        Stay
                                    </ul> */}
                                     <img src="/images/fit2.png"></img>
                                    <div className="middleTextContent">
                                            <p id="middleTextOverlay">
                                            We build our core strength and stamina by regular 
                                            excercise and other fitness options. We warm up really 
                                            well before the game to avoid injuries.
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