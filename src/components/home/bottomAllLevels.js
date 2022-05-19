import React from 'react';
import { NavLink} from 'react-router-dom';
import BackgroundYellow from '../../image/yellowbgf.png';


let sectionStyle = {
    backgroundImage: `url("${BackgroundYellow}")`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
}


const BottomAllLevels = () => {
    return (
        
        <div className="bottomAll">
            <div className="row">
                <div className="column5">
                    {/* <div style={sectionStyle} className="levels">
                    </div>  */}
                    <h3><div className='hyphen'></div>Skills</h3>
                    <p>Some skills are achieved through consistent training.</p>
                    <h3><div className='hyphen'></div>Training</h3>
                    <p>We have dedicated trainer Mr Mario Obando from Columbia.</p>
                    <h3><div className='hyphen'></div> Friendly Matches</h3>
                    <p>We had played friendly with Polish, Vietnamese, Somalian and Lebanon clubs.</p>
                    <h3><div className='hyphen'></div>Tournament</h3>
                    <p>In 2022 our team has played really well in a tournament conducted by Kairali Brisbane.We reached upto Quarter finals.</p>
                </div>
                <div className="column6">
                    <div className="soccerdays">
                    <img src="images/adv.png"></img>
                </div>
                </div>
            </div>
            <div className="greatsponsors">
                <h2>Our Sponsors</h2>
            </div>
            <div className="row">
            <section className="sponsorgrids">
                <div className="row">
                    <div className="col-lg-15 col-sm-6">
                            <div className='row'>
                                <div className="col-lg-15 col-sm-6">
                                    <a href="https://loanhouselendingsolutions.com.au/">
                                        <img src="images/loanhouselg.png"></img>
                                    </a>
                                </div>   
                            </div>
                    </div>
                    <div className="col-lg-15 col-sm-6">
                            <div className='row'>
                                <div className="col-lg-15 col-sm-6">
                                    <a href="https://www.iga.com.au/">
                                        <img src="images/iga.png"></img>
                                    </a>
                                </div>   
                            </div>
                    </div>

                    <div className="col-lg-15 col-sm-6">
                            <div className='row'>
                                <div className="col-lg-15 col-sm-6">
                                    <a href="https://loanhouselendingsolutions.com.au/">
                                        <img src="images/loanhouselg.png"></img>
                                    </a>
                                </div>   
                            </div>
                    </div>
                    <div className="col-lg-15 col-sm-6">
                            <div className='row'>
                                <div className="col-lg-15 col-sm-6">
                                    <a href="https://loanhouselendingsolutions.com.au/">
                                        <img src="images/loanhouselg.png"></img>
                                    </a>
                                </div>   
                            </div>
                    </div>
                    <div className="col-lg-15 col-sm-6">
                            <div className='row'>
                                <div className="col-lg-15 col-sm-6">
                                    <a href="https://loanhouselendingsolutions.com.au/">
                                        <img src="images/loanhouselg.png"></img>
                                    </a>
                                </div>   
                            </div>
                    </div>
                    <div className="col-lg-15 col-sm-6">
                            <div className='row'>
                                <div className="col-lg-15 col-sm-6">
                                    <a href="https://loanhouselendingsolutions.com.au/">
                                        <img src="images/loanhouselg.png"></img>
                                    </a>
                                </div>   
                            </div>
                    </div>
              </div>
            </section>
            </div>
            <div className="row">
            <section className="contactus">
                <h5>
                    <span>
                        <a href="/">Home</a>
                    </span>
                </h5>
                <h5>
                    <span>
                        <a href="/aboutUs">About Us</a>
                    </span>
                </h5>
                <h5>
                    <span>
                        <a href="/team">Team</a>
                    </span>
                </h5>
                <h5>
                    <span>
                        <a href="/admin">Admin</a>
                    </span>
                </h5>
            </section> 
            <section className="feedback">
                <h5>
                    <span>
                        <a href="/feedback">Feedback</a>
                    </span>
                </h5>
                
            </section> 
            <section className="social">
                
                
            </section> 
            </div>
        </div>
    )

}
export default BottomAllLevels