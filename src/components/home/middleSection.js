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
                                </div>   
                            </div>
                    </div>
                    <div className="col-lg-15 col-sm-6">
                            <div className='row'>
                                <div className="col-lg-15 col-sm-6">
                                    <ul className='arrowText'>
                                        Stay
                                    </ul>
                                </div>   
                            </div>
                    </div>

                    <div className="col-lg-15 col-sm-6">
                            <div className='row'>
                                <div className="col-lg-15 col-sm-6">
                                    <ul className='arrowText'>
                                        Stay
                                    </ul>
                                </div>   
                            </div>
                    </div>
                    <div className="col-lg-15 col-sm-6">
                            <div className='row'>
                                <div className="col-lg-15 col-sm-6">
                                    <ul className='arrowText'>
                                        Stay
                                    </ul>
                                </div>   
                            </div>
                    </div>
              </div>
            </section>
        </div>
    )
}
export default MiddleSection;